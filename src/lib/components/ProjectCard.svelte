<script lang="ts">
  import type { Project } from "$lib/types";
  import TerminalCard from "./common/TerminalCard.svelte";

  let { project }: { project: Project } = $props();
  const thumbnail = $derived(
    project.images?.[0] ??
      (project.video
        ? `https://img.youtube.com/vi/${project.video}/mqdefault.jpg`
        : null),
  );
  const hasSource = $derived(!!project.link && project.link !== "");
</script>

<a href="/projects/{project.slug}" class="block no-underline">
  <TerminalCard
    path="~/projects/{project.slug}"
    class="flex h-full cursor-pointer flex-col overflow-hidden">
    {#snippet ribbonRight()}
      {#if hasSource}
        <a
          href={project.link}
          target="_blank"
          onclick={(e) => e.stopPropagation()}
          class="font-mono text-2xs tracking-widest text-accent no-underline opacity-70 transition-opacity hover:opacity-100">
          [ VIEW_SOURCE ]
        </a>
      {:else}
        <span class="font-mono text-2xs text-accent/40 cursor-not-allowed">
          [ PRIVATE_REPO ]
        </span>
      {/if}
    {/snippet}

    {#if thumbnail}
      <div
        class="border-line relative mx-4 mt-4 h-32 overflow-hidden rounded border">
        <img
          src={thumbnail}
          alt={project.title}
          class="h-full w-full object-cover" />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent opacity-60">
        </div>
      </div>
    {/if}
    <div class="flex min-h-0 flex-1 flex-col p-4">
      <h3
        class="text-hi group-hover:text-accent mb-1.5 font-bold leading-snug transition-colors">
        {project.title}
      </h3>
      <p class="text-lo mb-3 flex-1 text-sm leading-relaxed">
        {project.description}
      </p>
      {#if project.tags?.length}
        <div class="flex flex-wrap gap-1.5">
          {#each project.tags.slice(0, 5) as tag}
            <span
              class="rounded border border-line px-2 py-0.5 font-mono text-2xs text-dim transition-colors group-hover:border-accent/20 group-hover:text-lo">
              {tag}
            </span>
          {/each}
          {#if project.tags.length > 5}
            <span class="text-dim/50 self-center font-mono text-2xs">
              +{project.tags.length - 5}
            </span>
          {/if}
        </div>
      {/if}
    </div>
  </TerminalCard>
</a>
