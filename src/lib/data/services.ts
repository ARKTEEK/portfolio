import type { Service } from "$lib/types";

export const services: Service[] = [
  {
    id: "fullstack",
    command: "deploy:web-app",
    stack: ["SvelteKit", "TypeScript", ".NET", "React"],
  },
  {
    id: "backend",
    command: "init:api",
    stack: ["ASP.NET", "C#", "Java", "Spring Boot", "Docker"],
  },
  {
    id: "frontend",
    command: "render:ui",
    stack: ["Svelte", "React", "TailwindCSS", "TypeScript"],
  },
]
