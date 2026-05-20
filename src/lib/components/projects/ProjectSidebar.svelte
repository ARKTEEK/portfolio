<script lang="ts">
  import { groupTags } from "$lib/data/tagGroups";
  import type { Project } from "$lib/types";

  let { project } = $props<{ project: Project }>();

  const sortedTagGroups = $derived(groupTags(project.tags ?? []));
</script>

<aside class="md:col-span-4">
  <div class="sticky top-8 space-y-12">
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-accent">❯</span>
        <span class="text-xs font-mono text-hi tracking-widest uppercase">
          Stack
        </span>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each sortedTagGroups as group}
          {#each group as tag}
            <span
              class="inline-flex items-center gap-1.5 rounded border border-line bg-surface px-2 py-1 font-mono text-2xs text-lo transition-colors">
              {tag}
            </span>
          {/each}
        {/each}
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-accent">❯</span>
        <span class="text-xs font-mono text-hi tracking-widest uppercase">
          Category
        </span>
      </div>
      <span
        class="inline-block px-2 py-1 text-2xs font-mono bg-surface border border-line text-dim rounded">
        {project.type}
      </span>
    </div>

    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-accent">❯</span>
        <span class="text-xs font-mono text-hi tracking-widest uppercase">
          Links
        </span>
      </div>
      <div class="flex flex-col gap-2">
        {#if project.website}
          <a
            href={project.website}
            target="_blank"
            class="text-xs font-mono text-accent hover:text-hi transition-colors">
            [ VISIT_WEBSITE ]
          </a>
        {/if}
        {#if project.link}
          <a
            href={project.link}
            target="_blank"
            class="text-xs font-mono text-accent hover:text-hi transition-colors">
            [ VIEW_SOURCE ]
          </a>
        {:else}
          <span class="font-mono text-xs text-accent/40 cursor-not-allowed">
            [ PRIVATE_SOURCE ]
          </span>
        {/if}
      </div>
    </div>
  </div>
</aside>
