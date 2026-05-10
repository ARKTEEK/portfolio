<script lang="ts">
  import { _ } from "svelte-i18n";
  import WidgetCard from "./WidgetCard.svelte";
</script>

<WidgetCard title={$_("widgets.availability.label")}>
  <div class="space-y-2 font-mono text-xs">
    <div class="flex justify-between">
      <span class="text-dim">
        {$_("widgets.availability.availability.label")}
      </span>
      <span class="text-emerald-400">
        {$_("widgets.availability.availability.available")}
      </span>
    </div>

    <div class="flex justify-between">
      <span class="text-dim">
        {$_("widgets.availability.preference.label")}
      </span>
      <span class="text-hi">
        {$_("widgets.availability.preference.text")}
      </span>
    </div>

    <div class="flex justify-between">
      <span class="text-dim">
        {$_("widgets.availability.work_type.label")}
      </span>
      <span class="text-hi">
        {$_("widgets.availability.work_type.text")}
      </span>
    </div>

    <div class="flex justify-between">
      <span class="text-dim">
        {$_("widgets.availability.response_time.label")}
      </span>
      <span class="text-hi">
        {$_("widgets.availability.response_time.text")}
      </span>
    </div>
  </div>
</WidgetCard>
