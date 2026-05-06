import { base } from "$app/paths";
import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Lutra Ledger",
    tags: ["Svelte", "Tauri", "Rust", "SQLite"],
    link: "",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    thumbnail: `${base}/thumbnails/lutra.png`,
    pinned: true,
    type: "client",
    slug: "lutra-ledger"
  },
  {
    id: 2,
    title: "Rhythmic",
    tags: [".NET", "React", "MySQL", "Typescript"],
    link: "https://www.github.com/ARKTEEK/rhythmic",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    video: "u5hVYthbdV8",
    thumbnail: `${base}/thumbnails/rhythmic.png`,
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
    thumbnail: `${base}/thumbnails/blaze.png`,
    slug: "blaze-website"
  },
  {
    id: 4,
    title: "shorty",
    tags: ["Go", "SQL"],
    link: "https://www.github.com/ARKTEEK/shorty",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "open-source",
    thumbnail: `${base}/thumbnails/shorty.png`,
    slug: "shorty"
  },
  {
    id: 7,
    title: "Timitis Order Management Platform",
    tags: ["Java", "Spring Boot", "React", "Typescript", "MySql"],
    link: "",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "client",
    thumbnail: `${base}/thumbnails/timitis.png`,
    slug: "timitis"
  },
  {
    id: 5,
    title: "Worsetagram",
    tags: [".NET", "Android", "SQLite"],
    link: "https://www.github.com/ARKTEEK/worsetagram",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "open-source",
    slug: "worsetagram"
  },
  {
    id: 6,
    title: "purrislav",
    tags: ["Rust", "SQLite"],
    link: "https://www.github.com/ARKTEEK/purrislav",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    video: "u5hVYthbdV8",
    pinned: false,
    type: "open-source",
    slug: "purrislav"
  },
  {
    id: 8,
    title: "Blackjack",
    tags: ["Javascript", "HTML"],
    link: "https://www.github.com/ARKTEEK/blackjack",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
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
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "open-source",
    slug: "sortvisualizer"
  },
]
