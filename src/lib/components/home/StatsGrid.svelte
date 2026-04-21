<script lang="ts">
  import LocationWidget from "./widget/LocationWidget.svelte";

  let { techTags = [] }: { techTags: string[] } = $props();

  let uptimeStr = $state("00:00:00");
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <p class="text-sm font-bold text-hi">Placeholder</p>
    </div>
    <p class="text-xs text-dim leading-relaxed">Lorum ipsum dolor sit amet, consectetur adipiscing elite.</p>
  </div>

  <LocationWidget />

  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <p class="text-sm font-bold text-hi">Stack</p>
    </div>
    <div class="flex flex-wrap gap-1.5 content-start flex-1">
      {#each techTags as tag}
        <span
          class="px-2 py-0.5 rounded text-2xs font-mono border border-subtle text-dim bg-hover
          hover:border-accent/30 hover:text-lo transition-colors cursor-default">
          {tag}
        </span>
      {/each}
    </div>
  </div>

  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <p class="text-sm font-bold text-hi">Uptime</p>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center gap-1 py-2">
      <p
        class="font-mono text-2xl font-bold text-accent tabular-nums tracking-tight">
        {uptimeStr}
      </p>
    </div>
  </div>
</div>
