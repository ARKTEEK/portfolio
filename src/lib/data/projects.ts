import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Lutra Ledger",
    description:
      "An application made for UAB Lutra, which creates PDF document files based on selected services and user information. It takes the chosen details and automatically generates the needed documents in a clear and simple format.",
    tags: ["Svelte", "Tauri", "Rust", "SQLite"],
    link: "/projects/lutra-ledger",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: true,
  },
  {
    id: 2,
    title: "Rhythmic",
    description:
      "An application that helps you manage music playlists across platforms like YouTube, Spotify, and SoundCloud. It lets you organize and control your music in one place without switching between different apps.",
    tags: [".NET", "React", "MySQL", "Typescript"],
    link: "/projects/rhythmic",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: true,
  },
  {
    id: 3,
    title: "Blaze.lt Website",
    description:
      "The official website for Blaze.lt. The site is designed to showcase the company's services, portfolio, and contact information in a modern and user-friendly way.",
    tags: ["Svelte", "Tailwind CSS", "MySQL", "Typescript"],
    link: "/projects/blaze-website",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 4,
    title: "shorty",
    description:
      "A URL shortening service built with Go and SQL. It allows users to create shortened links for long URLs, making them easier to share and manage.",
    tags: ["Go", "SQL"],
    link: "/projects/shorty",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 7,
    title: "Timitis Order Management Platform",
    description:
      "",
    tags: ["Java", "Spring Boot", "React", "Typescript", "MySql"],
    link: "/projects/timitis",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 5,
    title: "Worsetagram",
    description:
      "Android application which is a parody of Instagram, where users can share their worst photos. It allows users to upload and share their worst photos with friends and followers, creating a fun and lighthearted social media experience.",
    tags: [".NET", "Android", "SQLite"],
    link: "/projects/worsetagram",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 6,
    title: "purrislav",
    description:
      "A discord bot that provides birthday reminders. It allows users to input their birthdays and then sends notifications to a specified channel on their birthday, ensuring that no special day goes unnoticed in the community.",
    tags: ["Rust", "SQLite"],
    link: "/projects/purrislav",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 8,
    title: "Blackjack",
    description:
      "A simple implementation of the classic card game Blackjack, built using JavaScript and HTML with Glassmorphism. The game allows players to test their luck and strategy against a virtual dealer, providing an engaging and interactive gaming experience.",
    tags: ["Javascript", "HTML"],
    link: "/projects/blackjack",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
  {
    id: 9,
    title: "SortVisualizer",
    description:
      "A visual representation of sorting algorithms, made with ASP .NET and C#. It allows users to see how different sorting algorithms work in real-time, making it easier to understand their mechanics and performance.",
    tags: ["ASP .NET", "C#"],
    link: "/projects/sortvisualizer",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: false,
  },
]
