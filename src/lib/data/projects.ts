import { base } from "$app/paths";
import type { Project } from "$lib/types";

const getProjectImages = (slug: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `${base}/projects/${slug}/${i + 1}.png`);
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Lutra Ledger",
    tags: ["Svelte", "Tauri", "Rust", "SQLite"],
    link: "",
    images: getProjectImages("lutra-ledger", 15),
    thumbnail: `${base}/projects/lutra-ledger/thumbnail.png`,
    video: "cywRMLKnf0Q",
    pinned: true,
    type: "client",
    slug: "lutra-ledger"
  },
  {
    id: 2,
    title: "Rhythmic",
    tags: [".NET", "React", "MySQL", "Typescript"],
    link: "https://www.github.com/ARKTEEK/rhythmic",
    images: getProjectImages("rhythmic", 9),
    video: "u5hVYthbdV8",
    thumbnail: `${base}/projects/rhythmic/thumbnail.png`,
    pinned: true,
    type: "open-source",
    slug: "rhythmic",
  },
  {
    id: 3,
    title: "Blaze.lt Website",
    tags: ["Svelte", "Tailwind CSS", "MySQL", "Typescript"],
    link: "https://www.blaze.lt",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "client",
    thumbnail: `${base}/projects/blaze-website/thumbnail.png`,
    slug: "blaze-website"
  },
  {
    id: 4,
    title: "shorty",
    tags: ["Go", "SQL"],
    link: "https://www.github.com/ARKTEEK/shorty",
    pinned: false,
    type: "open-source",
    thumbnail: `${base}/projects/shorty/thumbnail.png`,
    slug: "shorty"
  },
  {
    id: 7,
    title: "Timitis Order Management Platform",
    tags: ["Java", "Spring Boot", "React", "Typescript", "MySql"],
    pinned: false,
    type: "client",
    thumbnail: `${base}/projects/timitis/thumbnail.png`,
    slug: "timitis"
  },
  {
    id: 5,
    title: "Worsetagram",
    tags: [".NET", "Android", "SQLite"],
    link: "https://www.github.com/ARKTEEK/worsetagram",
    pinned: false,
    type: "open-source",
    slug: "worsetagram"
  },
  {
    id: 6,
    title: "purrislav",
    tags: ["Rust", "SQLite"],
    link: "https://www.github.com/ARKTEEK/purrislav",
    pinned: false,
    type: "open-source",
    slug: "purrislav"
  },
  {
    id: 8,
    title: "Blackjack",
    tags: ["Javascript", "HTML"],
    link: "https://www.github.com/ARKTEEK/blackjack",
    video: "WUYlzi2kwiE",
    pinned: false,
    type: "open-source",
    slug: "blackjack"
  },
  {
    id: 9,
    title: "SortVisualizer",
    tags: ["ASP .NET", "C#"],
    link: "https://www.github.com/ARKTEEK/sortvisualizer",
    pinned: false,
    type: "open-source",
    slug: "sortvisualizer"
  },
]
