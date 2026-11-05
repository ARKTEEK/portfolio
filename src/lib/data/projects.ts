import { base } from "$app/paths";
import type { Project } from "$lib/types";

const getProjectImages = (slug: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `${base}/projects/${slug}/${i + 1}.png`);
};

export const projects: Project[] = [
  {
    id: 0,
    title: "Pairro",
    tags: ["Desktop", "Android", "Java", "Kotlin", "CSS"],
    link: "https://github.com/Pairro-App",
    images: getProjectImages("pairro", 9),
    thumbnail: `${base}/projects/pairro/thumbnail.png`,
    videos: [],
    pinned: true,
    type: "open-source",
    slug: "pairro",
    creation_date: "2026-09-17"
  },
  {
    id: 1,
    title: "Lutra Ledger",
    tags: ["Desktop", "Svelte", "Tauri", "Tailwind CSS", "Rust", "SQLite"],
    link: "",
    images: getProjectImages("lutra-ledger", 9),
    thumbnail: `${base}/projects/lutra-ledger/thumbnail.png`,
    videos: ["fs9QLUYGWd0"],
    pinned: false,
    type: "client",
    slug: "lutra-ledger",
    creation_date: "2026-01-01"
  },
  {
    id: 2,
    title: "Rhythmic",
    tags: ["Web", "C#", ".NET", "React", "MySQL", "Tailwind CSS", "TypeScript"],
    link: "https://www.github.com/ARKTEEK/rhythmic",
    images: getProjectImages("rhythmic", 9),
    videos: ["u5hVYthbdV8"],
    thumbnail: `${base}/projects/rhythmic/thumbnail.png`,
    pinned: true,
    type: "open-source",
    slug: "rhythmic",
    creation_date: "2025-09-01"
  },
  {
    id: 3,
    title: "Blaze.lt Website",
    tags: ["Web", "Svelte", "Tailwind CSS", "MySQL", "TypeScript"],
    link: "https://www.blaze.lt",
    images: getProjectImages("blaze-website", 7),
    videos: ["P7VnVUkZnMA "],
    pinned: false,
    type: "client",
    thumbnail: `${base}/projects/blaze-website/thumbnail.png`,
    slug: "blaze-website",
    creation_date: "2025-07-10"
  },
  {
    id: 4,
    title: "shorty",
    tags: ["CLI", "TUI", "Go", "SQL"],
    link: "https://www.github.com/ARKTEEK/shorty",
    pinned: false,
    type: "open-source",
    thumbnail: `${base}/projects/shorty/thumbnail.png`,
    slug: "shorty",
    creation_date: "2026-03-10"
  },
  {
    id: 7,
    title: "Timitis Order Management Platform",
    tags: ["Web", "Java", "Spring Boot", "React", "TypeScript", "MySQL"],
    pinned: false,
    type: "client",
    videos: ["McqXzn5zG8w", "yl9qIP8mLWg", "dZudfP50lTg", "SuqMtAGpUt4", "bX--yZAIjJw", "btbZ6CXCuuY"],
    thumbnail: `${base}/projects/timitis/thumbnail.png`,
    slug: "timitis",
    creation_date: "2024-10-01"
  },
  {
    id: 5,
    title: "Worsetagram",
    tags: ["Android", "Firebase", "Kotlin"],
    link: "https://www.github.com/ARKTEEK/worsetagram",
    videos: ["X-nB9Nsh9P4"],
    pinned: false,
    type: "open-source",
    slug: "worsetagram",
    creation_date: "2024-07-01"
  },
  {
    id: 6,
    title: "purrislav",
    tags: ["CLI", "Rust", "SQLite"],
    link: "https://www.github.com/ARKTEEK/purrislav",
    pinned: false,
    type: "open-source",
    slug: "purrislav",
    creation_date: "2025-02-16"
  },
  {
    id: 8,
    title: "Blackjack",
    tags: ["Web", "JavaScript", "HTML"],
    link: "https://www.github.com/ARKTEEK/blackjack",
    videos: ["Y2e4vpo76Lk "],
    pinned: false,
    type: "open-source",
    slug: "blackjack",
    creation_date: "2024-04-20"
  },
  {
    id: 9,
    title: "SortVisualizer",
    tags: ["ASP .NET", "C#"],
    images: getProjectImages("sortvisualizer", 2),
    link: "https://www.github.com/ARKTEEK/sortvisualizer",
    videos: ["40dJ35G8BGk"],
    pinned: false,
    type: "open-source",
    slug: "sortvisualizer",
    creation_date: "2024-03-18"
  },
]
