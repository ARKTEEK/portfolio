<script lang="ts">
  import WidgetCard from "./WidgetCard.svelte";

  let { categories = {} }: { categories: Record<string, string[]> } = $props();
</script>

<WidgetCard title="stack">
  <div class="flex flex-col divide-y divide-subtle">
    {#each Object.entries(categories) as [name, tags]}
      <div class="py-2.5 first:pt-0 last:pb-0 flex flex-col gap-1.5">
        <div class="flex flex-wrap gap-1">
          {#each tags as tag}
            <span
              class="rounded border border-line px-2 py-0.5 font-mono text-2xs text-dim transition-colors group-hover:border-accent/20 group-hover:text-lo">
              {tag}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</WidgetCard>
