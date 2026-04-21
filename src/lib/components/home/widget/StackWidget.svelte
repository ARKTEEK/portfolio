<script lang="ts">
  import { IconCode } from "@tabler/icons-svelte";

  let { tags = [] }: { tags: string[] } = $props();
</script>

<div
  class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3 h-full">
  <div class="flex items-center gap-2">
    <IconCode size={16} class="text-accent" />
    <p class="text-sm font-medium text-hi">Stack</p>
  </div>

  <div class="flex flex-wrap gap-1.5 content-start flex-1">
    {#each tags as tag}
      <span
        class="px-2 py-0.5 rounded text-2xs font-mono border border-subtle text-dim bg-hover
        hover:border-accent/30 hover:text-lo transition-colors cursor-default select-none">
        {tag}
      </span>
    {/each}
  </div>
</div>
