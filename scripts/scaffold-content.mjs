#!/usr/bin/env node
// scripts/scaffold-content.mjs
// Fetches original Tour of Go content from GitHub and generates markdown lesson files.

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

const BASE_URL =
  'https://raw.githubusercontent.com/golang/website/master/_content/tour';

const CHAPTERS = [
  { article: 'basics', chapter: 1, slug: '01-basics' },
  { article: 'flowcontrol', chapter: 2, slug: '02-flow-control' },
  { article: 'moretypes', chapter: 3, slug: '03-more-types' },
  { article: 'methods', chapter: 4, slug: '04-methods' },
  { article: 'generics', chapter: 5, slug: '05-generics' },
  { article: 'concurrency', chapter: 6, slug: '06-concurrency' },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Convert Go present-format link syntax [[url][text]] to markdown [text](url).
 */
function convertLinks(text) {
  return text.replace(/\[\[([^\]]+)\]\[([^\]]+)\]\]/g, '[$2]($1)');
}

/**
 * Convert body lines (from the Go present format) into proper markdown.
 *
 * Rules applied:
 * - Lines starting with a tab or 2+ spaces become fenced code blocks
 * - Lines starting with `- ` are list items
 * - `_text_` is italic in present format (same as markdown)
 * - `*text*` is bold in present format (same as markdown)
 * - [[url][text]] links are converted by convertLinks()
 * - Empty lines are paragraph breaks
 * - Lines starting with `.image` become markdown image references
 */
function bodyToMarkdown(lines) {
  const result = [];
  let inCodeBlock = false;

  for (const rawLine of lines) {
    const line = convertLinks(rawLine);

    // Detect indented lines (code blocks in present format)
    const isIndented = /^\t/.test(line) || /^  /.test(line);

    if (isIndented) {
      if (!inCodeBlock) {
        result.push('```go');
        inCodeBlock = true;
      }
      // Strip the leading tab or leading spaces
      result.push(line.replace(/^\t/, '').replace(/^  /, ''));
    } else {
      if (inCodeBlock) {
        result.push('```');
        inCodeBlock = false;
      }
      result.push(line);
    }
  }

  if (inCodeBlock) {
    result.push('```');
  }

  return result.join('\n').trim();
}

// ---------------------------------------------------------------------------
// Article parser
// ---------------------------------------------------------------------------

/**
 * Parse a .article file in Go present format.
 *
 * Returns an array of lesson objects:
 * { title: string, body: string[], codeFile: string | null }
 */
function parseArticle(content) {
  const lines = content.split('\n');
  const lessons = [];
  let current = null;

  for (const line of lines) {
    // Skip appengine-only lines
    if (line.startsWith('#appengine:')) continue;

    // New lesson starts with `* `
    if (line.startsWith('* ')) {
      if (current) lessons.push(current);
      current = {
        title: line.slice(2).trim(),
        body: [],
        codeFile: null,
      };
      continue;
    }

    if (!current) continue;

    // Code reference (.play or .code)
    if (line.startsWith('.play ') || line.startsWith('.code ')) {
      current.codeFile = line.split(/\s+/)[1].trim();
      continue;
    }

    // Image directive -> convert to markdown-style reference
    if (line.startsWith('.image ')) {
      const imgPath = line.split(/\s+/)[1];
      current.body.push(`![diagram](${imgPath})`);
      continue;
    }

    // Skip any other directives (lines starting with `.`)
    if (/^\.[a-z]/.test(line)) continue;

    // Regular content line
    current.body.push(line);
  }

  if (current) lessons.push(current);

  // Filter out meta-lessons
  return lessons.filter(
    (l) =>
      !l.title.startsWith('Congratulations') &&
      !l.title.startsWith('Where to Go from here'),
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const outBase = path.join(PROJECT_ROOT, 'src', 'content', 'lessons');

  // Ensure base output dir exists
  await fs.mkdir(outBase, { recursive: true });

  let totalLessons = 0;

  for (const ch of CHAPTERS) {
    console.log(`\nProcessing ${ch.article}...`);
    const articleUrl = `${BASE_URL}/${ch.article}.article`;
    const articleContent = await fetchText(articleUrl);
    const lessons = parseArticle(articleContent);

    const chapterDir = path.join(outBase, ch.slug);
    await fs.mkdir(chapterDir, { recursive: true });

    console.log(`  Found ${lessons.length} lessons`);

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const num = String(i + 1).padStart(2, '0');
      const slug = slugify(lesson.title);
      const filename = `${num}-${slug}.md`;

      // Fetch Go code if referenced
      let code = '';
      if (lesson.codeFile) {
        try {
          code = await fetchText(`${BASE_URL}/${lesson.codeFile}`);
          // Remove build directives
          code = code
            .replace(/^\/\/go:build\s+.*\n\n?/gm, '')
            .trim();
        } catch (e) {
          console.warn(
            `  Warning: Could not fetch ${lesson.codeFile}: ${e.message}`,
          );
        }
      }

      // Convert body to markdown
      const bodyMarkdown = bodyToMarkdown(lesson.body);

      // Build description from first meaningful sentence
      const plainText = bodyMarkdown.replace(/[`*_\[\]()#]/g, '').trim();
      const firstSentence = plainText.split(/\.\s/)[0];
      const description = (firstSentence.endsWith('.')
        ? firstSentence
        : firstSentence + '.'
      ).slice(0, 160);

      const isExercise = lesson.title.toLowerCase().includes('exercise');

      // Build frontmatter
      const fm = [];
      fm.push('---');
      fm.push(`title: "${lesson.title.replace(/"/g, '\\"')}"`);
      fm.push(`chapter: ${ch.chapter}`);
      fm.push(`lesson: ${i + 1}`);
      fm.push(`description: "${description.replace(/"/g, '\\"')}"`);
      fm.push(`isExercise: ${isExercise}`);
      if (code) {
        fm.push('code: |');
        for (const codeLine of code.split('\n')) {
          fm.push('  ' + codeLine);
        }
      }
      fm.push('---');
      fm.push('');

      const content = fm.join('\n') + bodyMarkdown + '\n';

      await fs.writeFile(path.join(chapterDir, filename), content, 'utf-8');
      console.log(`  Created ${ch.slug}/${filename}`);
    }

    totalLessons += lessons.length;
    console.log(`  Chapter ${ch.chapter}: ${lessons.length} lessons`);
  }

  console.log(`\nDone! Scaffolded ${totalLessons} lesson files total.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
