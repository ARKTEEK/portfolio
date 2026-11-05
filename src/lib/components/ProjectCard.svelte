<script lang="ts">
  import { base } from "$app/paths";
  import { groupTags } from "$lib/data/tagGroups";
  import type { Project } from "$lib/types";
  import { _, locale } from "svelte-i18n";
  import TerminalCard from "./common/TerminalCard.svelte";

  let { project }: { project: Project } = $props();

  const projectLink = $derived(
    `${base}/${$locale ?? "en"}/projects/${project.slug}`,
  );

  const description = $derived.by(() => {
    const translationKey = `projects.${project.slug}.description`;
    const translated = $_(translationKey);
    if (translated !== translationKey) {
      return translated;
    }
    return project.description ?? "";
  });

  const thumbnailPath = $derived(project.thumbnail);
  const hasSource = $derived(!!project.link && project.link !== "");

  const TAG_DISPLAY_LIMIT = 6;

  const tagGroups = $derived.by(() => {
    const all = project.tags ?? [];
    const displayed = all.slice(0, TAG_DISPLAY_LIMIT);
    return groupTags(displayed);
  });

  const overflowCount = $derived(
    Math.max(0, (project.tags?.length ?? 0) - TAG_DISPLAY_LIMIT),
  );
</script>

<a href={projectLink} class="block no-underline">
  <TerminalCard
    path="~/{$_('project_card.window_path')}/{project.slug}"
    class="flex h-full cursor-pointer flex-col overflow-hidden">
    {#snippet ribbonRight()}
      {#if hasSource}
        <a
          href={project.link}
          target="_blank"
          onclick={(e) => e.stopPropagation()}
          class="font-mono text-2xs tracking-widest text-accent no-underline opacity-70 transition-opacity hover:opacity-100">
          [ {$_("project_card.view_source")} ]
        </a>
      {:else}
        <span class="font-mono text-2xs text-accent/40 cursor-not-allowed">
          [ {$_("project_card.private_source")} ]
        </span>
      {/if}
    {/snippet}

    {#if thumbnailPath}
        <div class="border-line relative aspect-2.5/1 overflow-hidden border-b">
          <img
            src={thumbnailPath}
            alt={project.title}
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover object-center" />
        <div
          class="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent opacity-60">
        </div>
      </div>
    {:else}
      <div
        class="border-line relative mx-4 mt-4 flex aspect-video items-center justify-center overflow-hidden rounded border bg-[#0a0a0a]/50">
        <span class="font-mono text-6xl tracking-widest text-dim opacity-10">
          [EMPTY]
        </span>
      </div>
    {/if}

    <div class="flex min-h-0 flex-1 flex-col p-4">
      <h3
        class="text-hi group-hover:text-accent mb-1.5 font-bold leading-snug transition-colors">
        {project.title}
      </h3>
      <p class="text-lo mb-3 flex-1 text-sm leading-relaxed">
        {description}
      </p>

      {#if tagGroups.length}
        <div class="flex flex-wrap items-center gap-1.5">
          {#each tagGroups as group}
            {#each group as tag}
              <span
                class="inline-flex items-center gap-1.5 rounded border border-line px-2 py-0.5 font-mono text-2xs text-lo transition-colors group-hover:border-accent/20">
                {tag}
              </span>
            {/each}
          {/each}

          {#if overflowCount > 0}
            <span class="text-dim/50 font-mono text-2xs">
              +{overflowCount}
            </span>
          {/if}
        </div>
      {/if}
    </div>
  </TerminalCard>
</a>
