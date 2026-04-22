<script lang="ts">
  import LocationWidget from "./LocationWidget.svelte";
  import AvailabilityWidget from "./PlaceholderWidget.svelte";
  import StackWidget from "./StackWidget.svelte";
  import UptimeWidget from "./UptimeWidget.svelte";

  let {
    techTags = [],
  }: {
    techTags?: string[];
    email?: string;
  } = $props();
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 items-stretch">
  <AvailabilityWidget />
  <LocationWidget />
  <StackWidget tags={techTags} />
  <UptimeWidget />
</div>
