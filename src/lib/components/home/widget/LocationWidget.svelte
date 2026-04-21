<script lang="ts">
  import MapWidget from "./MapWidget.svelte";

  let timeStr = $state("--:--:--");

  $effect(() => {
    const tick = () => {
      timeStr = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Vilnius",
        hour12: false,
      }).format(new Date());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  });
</script>

<div
  class="border border-subtle rounded-xl p-5 bg-surface flex flex-col gap-3 h-full">
  <div class="flex items-center gap-2">
    <p class="text-sm font-bold text-hi">Based In</p>
  </div>

  <div
    class="flex-1 rounded-xl overflow-hidden relative border border-white/5 min-h-26">
    <MapWidget />

    <div
      class="absolute inset-x-0 bottom-0 px-2.5 py-2 flex items-end justify-between pointer-events-none z-1000"
      style="background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);">
      <div class="flex flex-col gap-0.5">
        <span class="text-2xs font-mono text-white/90 font-semibold">
          Kaunas, LT
        </span>
        <span
          class="text-[9px] font-mono text-white/40 uppercase tracking-wider">
          UTC+3 · EEST
        </span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="relative flex h-1.5 w-1.5">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75">
          </span>
          <span
            class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400">
          </span>
        </span>
        <span class="font-mono text-2xs text-green-400 tabular-nums">
          {timeStr}</span>
      </div>
    </div>
  </div>
</div>
