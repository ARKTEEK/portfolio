<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import SectionHeader from "$lib/components/common/SectionHeader.svelte";
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
  <SectionHeader title="featured_projects" href="/projects" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each pinnedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<section class="mb-10">
  <SectionHeader title="widgets" meta="stats" />
  <StatsGrid {techTags} />
</section>

<section class="mb-10">
  <SectionHeader title="commits" meta="git log" />
  <CommitList />
</section>
