/**
 * Pre-generates Go Playground share IDs for all lesson code.
 * Outputs a JSON map: { "lessonId": "shareHash", ... }
 * Run: node scripts/share-playground.mjs
 */
import fs from 'fs/promises';
import path from 'path';

const LESSONS_DIR = path.resolve('src/content/lessons');
const OUTPUT_FILE = path.resolve('src/lib/playground-ids.json');

async function getShareId(code) {
  const res = await fetch('https://go.dev/_/share', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: code,
  });
  if (!res.ok) throw new Error(`Share API returned ${res.status}`);
  return res.text();
}

function extractCode(content) {
  // Extract 'code' field from YAML frontmatter
  // Frontmatter is between first --- and second ---
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = match[1];

  // code: is always the last field before closing ---
  // Grab everything after "code: |" until end of frontmatter
  const codeMatch = fm.match(/^code:\s*\|\n([\s\S]*)$/m);
  if (!codeMatch) return null;

  // Remove the 2-space indent from each line
  return codeMatch[1]
    .split('\n')
    .map(line => line.startsWith('  ') ? line.slice(2) : line)
    .join('\n')
    .trim();
}

async function main() {
  const mapping = {};
  let count = 0;
  let skipped = 0;

  // Read all chapter directories
  const chapters = await fs.readdir(LESSONS_DIR);

  for (const chapter of chapters.sort()) {
    const chapterDir = path.join(LESSONS_DIR, chapter);
    const stat = await fs.stat(chapterDir);
    if (!stat.isDirectory()) continue;

    const files = await fs.readdir(chapterDir);
    for (const file of files.sort()) {
      if (!file.endsWith('.md')) continue;
      const lessonId = `${chapter}/${file.replace('.md', '')}`;
      const content = await fs.readFile(path.join(chapterDir, file), 'utf-8');
      const code = extractCode(content);

      if (!code) {
        skipped++;
        continue;
      }

      try {
        const shareId = await getShareId(code);
        mapping[lessonId] = shareId;
        count++;
        console.log(`  ✓ ${lessonId} → ${shareId}`);
      } catch (err) {
        console.error(`  ✗ ${lessonId}: ${err.message}`);
      }

      // Rate limit: 100ms between requests
      await new Promise(r => setTimeout(r, 100));
    }
  }

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(mapping, null, 2), 'utf-8');
  console.log(`\nDone! ${count} share IDs generated, ${skipped} lessons skipped (no code).`);
  console.log(`Written to ${OUTPUT_FILE}`);
}

main().catch(console.error);
