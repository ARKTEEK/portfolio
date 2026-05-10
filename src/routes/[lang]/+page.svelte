<script lang="ts">
  import { base } from "$app/paths";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import SectionHeader from "$lib/components/common/SectionHeader.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import StatsGrid from "$lib/components/home/WidgetsGrid.svelte";
  import CommitList from "$lib/components/home/commit/CommitList.svelte";
  import { projects } from "$lib/data/projects";
  import { _ } from "svelte-i18n";

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
  <title>{$_("pages.home.page_title")}</title>
</svelte:head>

<Hero />

<section class="mb-10">
  <SectionHeader title={$_("sections.featured_projects")} href="{base}/projects" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each pinnedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<section class="mb-10">
  <SectionHeader title={$_("sections.widgets")} meta="stats" />
  <StatsGrid {techTags} />
</section>

<section class="mb-10">
  <SectionHeader title={$_("sections.commits")} meta="git log" />
  <CommitList />
</section>
