const STORAGE_KEY = 'tour-of-go-progress';

interface ProgressData {
  version: 1;
  completed: Record<string, boolean>;
}

export function getProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data: ProgressData = JSON.parse(raw);
    return data.completed ?? {};
  } catch {
    return {};
  }
}

export function setLessonComplete(lessonId: string, complete: boolean): void {
  const completed = getProgress();
  if (complete) completed[lessonId] = true;
  else delete completed[lessonId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, completed }));
}

export function isLessonComplete(lessonId: string): boolean {
  return getProgress()[lessonId] === true;
}
