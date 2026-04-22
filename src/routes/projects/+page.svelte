<script lang="ts">
  import PageHeader from "$lib/components/PageHeader.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { projects } from "$lib/data/projects";

  const allTags = [...new Set(projects.flatMap((p) => p.tags ?? []))].sort();

  let selected = $state<string[]>([]);

  let filtered = $derived(
    selected.length === 0
      ? projects
      : projects.filter((p) => selected.every((t) => p.tags?.includes(t))),
  );

  function toggle(tag: string) {
    if (selected.includes(tag)) {
      selected = selected.filter((t) => t !== tag);
    } else {
      selected = [...selected, tag];
    }
  }
</script>

<svelte:head><title>Portfolio – Projects</title></svelte:head>

<PageHeader
  path="projects"
  title="All Projects"
  description="A full list of things I've built - personal tools, client work, and experiments." />

<div class="mb-8">
  <div class="flex items-center gap-2 mb-3">
    <span class="text-xs font-mono text-dim tracking-widest uppercase">
      filter_by
    </span>
    {#if selected.length > 0}
      <span class="text-xs font-mono text-accent/70">
        · {selected.length} active
      </span>
      <button
        onclick={() => (selected = [])}
        class="ml-auto text-xs font-mono text-dim hover:text-lo transition-colors cursor-pointer">
        [clear]
      </button>
    {/if}
  </div>
  <div class="flex flex-wrap gap-2">
    {#each allTags as tag}
      {@const active = selected.includes(tag)}
      <button
        onclick={() => toggle(tag)}
        class="px-2.5 py-1 text-xs font-mono border transition-all cursor-pointer
          {active
          ? 'border-accent/40 text-accent bg-accent/8'
          : 'border-line text-dim bg-surface hover:border-accent/20 hover:text-lo'}">
        {tag}
      </button>
    {/each}
  </div>
</div>

<div class="flex items-center justify-between mb-5">
  <p class="text-xs font-mono text-dim">
    showing <span class="text-lo">{filtered.length}</span> / {projects.length}
  </p>
</div>

{#if filtered.length > 0}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each filtered as project (project.id || project.title)}
      <ProjectCard {project} />
    {/each}
  </div>
{:else}
  <div class="border border-line bg-surface px-6 py-12 text-center">
    <p class="text-xs font-mono text-dim mb-1">// no results</p>
    <p class="text-sm text-lo">No projects match the selected filters.</p>
    <button
      onclick={() => (selected = [])}
      class="mt-4 text-xs font-mono text-accent/70 hover:text-accent transition-colors">
      [clear filters]
    </button>
  </div>
{/if}
