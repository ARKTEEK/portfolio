<script lang="ts">
  import AvailabilityWidget from "./widget/AvailabilityWidget.svelte";
  import StackWidget from "./widget/StackWidget.svelte";
  import UptimeWidget from "./widget/UptimeWidget.svelte";
  import VisitorsWidget from "./widget/VisitorsWidget.svelte";

  let {
  }: {
    techTags?: string[];
    email?: string;
  } = $props();
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 mb-10 items-stretch">
  <AvailabilityWidget />
  <VisitorsWidget />
  <StackWidget
    categories={{
      backend: ["Java", ".NET / C#", "Spring Boot", "SQL"],
      frontend: ["Svelte", "React", "TypeScript", "Tailwind"],
    }} />
  <UptimeWidget />
</div>
