<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import CommitList from "$lib/components/home/CommitList.svelte";
  import StatsGrid from "$lib/components/home/StatsGrid.svelte";
  import { projects } from "$lib/data/projects";

  const pinnedProjects = projects.filter((p) => p.pinned);

  const techTags = [
    "Java",
    ".NET / C#",
    "Svelte",
    "TypeScript",
    "PostgreSQL",
    "Spring Boot",
    "Docker",
  ];

  const commits = [
    {
      repo: "portfolio",
      msg: "refactor: componentize main page",
      additions: "+120",
      deletions: "-400",
    },
  ];
</script>

<svelte:head>
  <title>Mindaugas - Full-Stack Developer</title>
</svelte:head>

<Hero />

<section class="mb-10">
  <div class="flex items-center justify-between mb-5">
    <h2 class="text-base font-bold text-hi">Featured Projects</h2>
    <a href="/projects" class="text-xs font-mono text-accent">View all →</a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each pinnedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<StatsGrid {techTags} />

<CommitList {commits} />
