<script lang="ts">
  import AvailabilityWidget from "./widget/AvailabilityWidget.svelte";
  import LocationWidget from "./widget/LocationWidget.svelte";
  import StackWidget from "./widget/StackWidget.svelte";
  import UptimeWidget from "./widget/UptimeWidget.svelte";

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
  <StackWidget
    categories={{
      backend: ["Java", ".NET / C#", "Spring Boot", "SQL"],
      frontend: ["Svelte", "React", "TypeScript", "Tailwind"],
    }} />
  <UptimeWidget />
</div>
