<script lang="ts">
  import PageHeader from "$lib/components/common/PageHeader.svelte";
  import SectionHeader from "$lib/components/common/SectionHeader.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { projects } from "$lib/data/projects";
  import type { ProjectType } from "$lib/types";

  const TAG_GROUPS: Record<string, string[]> = {
    ".NET": [".NET", "C#", "ASP.NET", "ASP .NET"],
    JavaScript: ["JavaScript", "JS"],
    TypeScript: ["TypeScript", "TS"],
  };

  function canonicalTag(raw: string): string {
    for (const [label, members] of Object.entries(TAG_GROUPS)) {
      if (members.includes(raw)) return label;
    }
    return raw;
  }

  function projectHasTag(
    project: (typeof projects)[number],
    canonLabel: string,
  ): boolean {
    const members = TAG_GROUPS[canonLabel] ?? [canonLabel];
    return (project.tags ?? []).some((t) => members.includes(t));
  }

  const allTags = [
    ...new Set(projects.flatMap((p) => (p.tags ?? []).map(canonicalTag))),
  ].sort();

  const ITEMS_PER_BATCH = 6;

  let selectedTags = $state<string[]>([]);
  let selectedType = $state<"all" | ProjectType>("all");
  let visibleCount = $state(ITEMS_PER_BATCH);

  const pinnedProjects = $derived(projects.filter((p) => p.pinned));

  const unpinnedFiltered = $derived.by(() =>
    projects
      .filter((p) => !p.pinned)
      .filter((p) => selectedType === "all" || p.type === selectedType)
      .filter((p) =>
        selectedTags.length === 0
          ? true
          : selectedTags.every((t) => projectHasTag(p, t)),
      ),
  );

  const visibleProjects = $derived(unpinnedFiltered.slice(0, visibleCount));

  const hasMore = $derived(visibleCount < unpinnedFiltered.length);

  const hasActiveFilters = $derived(
    selectedTags.length > 0 || selectedType !== "all",
  );

  function toggleTag(tag: string) {
    selectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    visibleCount = ITEMS_PER_BATCH;
  }

  function clearFilters() {
    selectedTags = [];
    selectedType = "all";
    visibleCount = ITEMS_PER_BATCH;
  }

  let observerTarget: HTMLElement | undefined = $state();

  $effect(() => {
    if (!observerTarget || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visibleCount += ITEMS_PER_BATCH;
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(observerTarget);
    return () => observer.disconnect();
  });
</script>

<svelte:head><title>Portfolio – Projects</title></svelte:head>

<PageHeader
  path="projects"
  title="All Projects"
  description="A full list of things I've built - personal tools, client work, and experiments." />

<div class="mb-10 space-y-4">
  <div>
    <SectionHeader
      title="filter_by_tag"
      meta={selectedTags.length > 0
        ? `${selectedTags.length} active`
        : undefined}
      action={selectedTags.length > 0 ? "[clear_all]" : undefined}
      onaction={clearFilters} />
    <div class="flex flex-wrap gap-2">
      {#each allTags as tag}
        {@const active = selectedTags.includes(tag)}
        <button
          onclick={() => toggleTag(tag)}
          class="px-2.5 py-1 text-xs font-mono border transition-all cursor-pointer rounded
            {active
            ? 'border-accent/10 bg-accent/5 text-accent/90'
            : 'border-line text-dim bg-surface hover:border-accent/20 hover:text-lo'}">
          {tag}
        </button>
      {/each}
    </div>
  </div>
</div>

{#if pinnedProjects.length > 0 && !hasActiveFilters}
  <section class="mb-12">
    <SectionHeader title="pinned" meta={pinnedProjects.length.toString()} />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each pinnedProjects as project (project.id ?? project.title)}
        <ProjectCard {project} />
      {/each}
    </div>
  </section>
{/if}

<section>
  <SectionHeader
    title={hasActiveFilters ? "filtered" : "all_projects"}
    meta="{projects.filter((p) => !p.pinned).length} projects" />

  {#if visibleProjects.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each visibleProjects as project (project.id ?? project.title)}
        <ProjectCard {project} />
      {/each}
    </div>

    {#if hasMore}
      <div
        bind:this={observerTarget}
        class="h-20 flex items-center justify-center">
        <span class="text-xs font-mono text-dim animate-pulse">
          // loading_more...
        </span>
      </div>
    {/if}
  {:else}
    <div
      class="border border-line bg-surface px-6 py-12 text-center rounded-xl">
      <p class="text-xs font-mono text-dim mb-1">// no_results</p>
      <p class="text-sm text-lo">No projects match the selected filters.</p>
      <button
        onclick={clearFilters}
        class="mt-4 text-xs font-mono text-accent/70 hover:text-accent transition-colors cursor-pointer">
        [clear_filters]
      </button>
    </div>
  {/if}
</section>
