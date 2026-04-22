import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Lutra Ledger",
    description:
      "An application made for UAB Lutra, which creates PDF document files based on selected services and user information. It takes the chosen details and automatically generates the needed documents in a clear and simple format.",
    tags: ["Svelte", "Tauri", "Rust", "SQLite"],
    link: "",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: true,
    type: "client",
    slug: "lutra-ledger"
  },
  {
    id: 2,
    title: "Rhythmic",
    description:
      "An application that helps you manage music playlists across platforms like YouTube, Spotify, and SoundCloud. It lets you organize and control your music in one place without switching between different apps.",
    tags: [".NET", "React", "MySQL", "Typescript"],
    link: "https://www.github.com/ARKTEEK/rhythmic",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    video: "u5hVYthbdV8",
    pinned: true,
    type: "open-source",
    slug: "rhythmic",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "- Integrated three different OAuth providers.",
      "- Placeholder"
    ],
  },
  {
    id: 3,
    title: "Blaze.lt Website",
    description:
      "The official website for Blaze.lt. The site is designed to showcase the company's services, portfolio, and contact information in a modern and user-friendly way.",
    tags: ["Svelte", "Tailwind CSS", "MySQL", "Typescript"],
    link: "https://www.blaze.lt",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "client",
    slug: "blaze-website"
  },
  {
    id: 4,
    title: "shorty",
    description:
      "A URL shortening service built with Go and SQL. It allows users to create shortened links for long URLs, making them easier to share and manage.",
    tags: ["Go", "SQL"],
    link: "https://www.github.com/ARKTEEK/shorty",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "open-source",
    slug: "shorty"
  },
  {
    id: 7,
    title: "Timitis Order Management Platform",
    description:
      "",
    tags: ["Java", "Spring Boot", "React", "Typescript", "MySql"],
    link: "",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "client",
    slug: "timitis"
  },
  {
    id: 5,
    title: "Worsetagram",
    description:
      "Android application which is a worse clone of Instagram. It allows users to share photos, follow friends, and explore content in a less polished and more frustrating way than the original Instagram.",
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
    description:
      "A discord bot that provides birthday reminders. It allows users to input their birthdays and then sends notifications to a specified channel on their birthday, ensuring that no special day goes unnoticed in the community.",
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
    description:
      "A simple implementation of the classic card game Blackjack, built using JavaScript and HTML with Glassmorphism. The game allows players to test their luck and strategy against a virtual dealer, providing an engaging and interactive gaming experience.",
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
    description:
      "A visual representation of sorting algorithms, made with ASP .NET and C#. It allows users to see how different sorting algorithms work in real-time, making it easier to understand their mechanics and performance.",
    tags: ["ASP .NET", "C#"],
    link: "https://www.github.com/ARKTEEK/sortvisualizer",
    images: ["https://i.imgur.com/ugo3eGc.jpeg"],
    pinned: false,
    type: "open-source",
    slug: "sortvisualizer"
  },
]
