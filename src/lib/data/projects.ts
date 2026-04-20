import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    title: "Lutra Ledger",
    description:
      "An application made for UAB Lutra, which creates PDF document files based on selected services and user information. It takes the chosen details and automatically generates the needed documents in a clear and simple format.",
    tags: ["SvelteKit", "Tauri", "Rust", "SQLite"],
    link: "/projects/lutra-ledger",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: true,
  },
  {
    title: "Rhythmic",
    description:
      "An application that helps you manage music playlists across platforms like YouTube, Spotify, and SoundCloud. It lets you organize and control your music in one place without switching between different apps.",
    tags: [".NET", "React", "MySQL", "Typescript"],
    link: "/projects/rhythmic",
    image: "https://i.imgur.com/ugo3eGc.jpeg",
    pinned: true,
  },
]
