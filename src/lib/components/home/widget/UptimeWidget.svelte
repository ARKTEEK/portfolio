<script lang="ts">
    import { _ } from "svelte-i18n";
    import WidgetCard from "./WidgetCard.svelte";

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

<WidgetCard title={$_("widgets.uptime.label")}>
  <div class="flex-1 flex flex-col items-center justify-center gap-1">
    <p
      class="font-mono text-2xl font-bold text-accent tabular-nums tracking-tight">
      {uptimeStr}
    </p>
    <p class="text-2xs text-dim font-mono uppercase tracking-wider">
      {$_("widgets.uptime.session_uptime")}
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
      {$_("widgets.uptime.systems_status")}
    </span>
  </div>
</WidgetCard>
