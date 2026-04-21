<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import CommitList from "$lib/components/home/commit/CommitList.svelte";
  import StatsGrid from "$lib/components/home/widget/WidgetsGrid.svelte";
  import { projects } from "$lib/data/projects";

  const pinnedProjects = projects.filter((p) => p.pinned);

  const techTags = [
    "Java",
    ".NET / C#",
    "Svelte",
    "React",
    "TypeScript",
    "SQL",
    "Spring Boot",
    "Docker",
  ];
</script>

<svelte:head>
  <title>Mindaugas - Full-Stack Developer</title>
</svelte:head>

<Hero />

<section class="mb-10">
  <div class="flex items-center justify-between mb-5">
    <h2 class="text-base font-medium text-hi">Featured Projects</h2>
    <a
      href="/projects"
      class="text-sm font-mono text-accent underline underline-offset-4 decoration-dotted hover:decoration-solid transition-all">
      View all →
    </a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each pinnedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<div class="flex items-center justify-between mb-5">
  <h2 class="text-base font-medium text-hi">Widgets</h2>
</div>
<StatsGrid {techTags} />

<div class="flex items-center justify-between mb-5">
  <h2 class="text-base font-medium text-hi">Commits</h2>
</div>
<CommitList />
