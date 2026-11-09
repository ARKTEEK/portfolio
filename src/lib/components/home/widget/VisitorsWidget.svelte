<script lang="ts">
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import { fetchVisitorCount, visitorCount } from "../../../counter";
  import WidgetCard from "./WidgetCard.svelte";

  onMount(() => {
    fetchVisitorCount("arkteek-dev-portfolio-visitors");
  });
</script>

<WidgetCard title={$_("widgets.visitors.label")}>
  <div class="flex-1 flex flex-col items-center justify-center gap-1">
    <p class="font-mono text-2xl font-bold text-emerald-400 tabular-nums tracking-tight">
      {$visitorCount !== null ? $visitorCount : "..."}
    </p>
    <p class="text-2xs text-dim font-mono uppercase tracking-wider">
      {$_("widgets.visitors.text")}
    </p>
  </div>

  <div class="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface/50 border border-dim/20 text-2xs font-mono text-dim">
    <span>{$_("widgets.visitors.tracking_since")}</span>
    <span class="text-hi font-medium">2026-09-01</span>
  </div>
</WidgetCard>
