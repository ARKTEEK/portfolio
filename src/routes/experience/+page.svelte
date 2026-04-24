<script lang="ts">
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import { experiences } from "$lib/data/experience";
</script>

<PageHeader
  path="experience"
  title="Work History"
  description="A timeline of my professional experience - places I've worked and the systems I've helped build." />

<div class="max-w-3xl mx-auto py-12 px-6">
  <div class="relative ml-4 pl-12">
    <div class="absolute left-0 top-3 bottom-3 w-0.5 bg-accent/20 rounded-full">
      <div class="absolute -top-1 -left-0.75 h-2 w-2 rounded-full bg-accent/40">
      </div>

      <div class="absolute inset-0 bg-accent/10 blur-[1px]"></div>

      <div
        class="absolute -bottom-1 -left-0.75 h-2 w-2 rounded-full bg-accent/40">
      </div>
    </div>

    <div class="flex flex-col gap-12">
      {#each experiences as exp}
        <ExperienceCard {exp} />
      {/each}
    </div>
  </div>
</div>
