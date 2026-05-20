const collator = new Intl.Collator(undefined, { sensitivity: "base" });

const APP_TYPE_TAGS = new Set([
  "Android",
  "Desktop",
  "CLI",
  "Flutter",
  "iOS",
  "Mobile",
  "Web",
]);

const BACKEND_DB_TAGS = new Set([
  ".NET",
  "ASP .NET",
  "C#",
  "Firebase",
  "Go",
  "Java",
  "Kotlin",
  "MongoDB",
  "MySQL",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "Python",
  "Redis",
  "Ruby",
  "Rust",
  "SQL",
  "SQLite",
  "Spring Boot",
  "Supabase",
  "Swift",
  "Tauri",
]);

const FRONTEND_TAGS = new Set([
  "Angular",
  "CSS",
  "HTML",
  "JavaScript",
  "React",
  "Svelte",
  "Tailwind CSS",
  "TUI",
  "TypeScript",
  "Vue",
]);

export function groupTags(tags: string[]): string[][] {
  const result: string[][] = [];

  const pick = (set: Set<string>) =>
    tags.filter((t) => set.has(t)).sort(collator.compare);

  const appType = pick(APP_TYPE_TAGS);
  const backendDb = pick(BACKEND_DB_TAGS);
  const frontend = pick(FRONTEND_TAGS);
  const assigned = new Set([...appType, ...backendDb, ...frontend]);
  const leftover = tags.filter((t) => !assigned.has(t)).sort(collator.compare);

  if (appType.length) {
    result.push(appType);
  }

  if (backendDb.length) {
    result.push(backendDb);
  }

  if (frontend.length) {
    result.push(frontend);
  }

  if (leftover.length) {
    result.push(leftover);
  }

  return result;
}
