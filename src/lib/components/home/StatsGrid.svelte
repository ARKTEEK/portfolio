<script lang="ts">
  import { onDestroy } from "svelte";
  export let techTags: string[] = [];

  let uptimeStr = "00:00:00";
  let interval: any;

  onDestroy(() => clearInterval(interval));
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3">
    <p class="text-sm font-bold text-hi">Placeholder</p>
    <p class="text-xs text-dim leading-relaxed">
      Lorum ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3">
    <p class="text-sm font-bold text-hi">
      Based In
    </p>
    <p class="text-xs text-dim leading-relaxed">Map goes here</p>
  </div>

  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3">
    <p class="text-sm font-bold text-hi">Stack</p>
    <div class="flex flex-wrap gap-1.5 content-start">
      {#each techTags as tag}
        <span
          class="px-2 py-0.5 rounded text-2xs font-mono border border-subtle text-dim bg-hover">
          {tag}
        </span>
      {/each}
    </div>
  </div>

  <div
    class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-2">
    <p class="text-sm font-bold text-hi">Session</p>
    <div class="flex-1 flex flex-col items-center justify-center">
      <p class="font-mono text-2xl font-bold text-accent tabular-nums">
        {uptimeStr}
      </p>
      <p class="text-xs text-dim font-mono">active</p>
    </div>
  </div>
</div>
