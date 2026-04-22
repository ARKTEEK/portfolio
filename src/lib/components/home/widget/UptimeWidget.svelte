<script lang="ts">
  import { IconServerBolt } from "@tabler/icons-svelte";

  let uptimeStr = $state("00:00:00");

  const startTime = Date.now();

  $effect(() => {
    const tick = () => {
      const s = Math.floor((Date.now() - startTime) / 1000);
      uptimeStr = [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
        .map((n) => String(n).padStart(2, "0"))
        .join(":");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  });
</script>

<div
  class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3 h-full">
  <div class="flex items-center gap-2">
    <IconServerBolt size={16} class="text-accent" />
    <p class="text-sm font-medium text-hi">Uptime</p>
  </div>

  <div class="flex-1 flex flex-col items-center justify-center gap-1">
    <p
      class="font-mono text-2xl font-bold text-accent tabular-nums tracking-tight">
      {uptimeStr}
    </p>
    <p class="text-2xs text-dim font-mono uppercase tracking-wider">
      session active
    </p>
  </div>

  <div
    class="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-accent/8 border border-accent/20">
    <span class="relative flex h-1.5 w-1.5 shrink-0">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75">
      </span>
      <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent">
      </span>
    </span>
    <span class="text-2xs font-mono text-accent font-medium">
      All Systems Running
    </span>
  </div>
</div>
