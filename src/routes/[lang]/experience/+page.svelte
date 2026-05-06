<script lang="ts">
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import PageHeader from "$lib/components/common/PageHeader.svelte";
  import { experiences } from "$lib/data/experience";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("pages.experience.title")}</title>
</svelte:head>

<PageHeader
  path={$_("pages.experience.path")}
  title={$_("pages.experience.title")}
  description={$_("pages.experience.description")} />

<div class="max-w-3xl mx-auto py-12 px-6">
  <div class="relative ml-4 pl-12">
    <div class="absolute left-0 top-3 bottom-3 w-0.5 bg-accent/20 rounded-full">
      <div class="absolute -top-1 -left-0.75 h-2 w-2 rounded-full bg-accent/40"></div>
      <div class="absolute inset-0 bg-accent/10 blur-[1px]"></div>
      <div class="absolute -bottom-1 -left-0.75 h-2 w-2 rounded-full bg-accent/40"></div>
    </div>
    <div class="flex flex-col gap-12">
      {#each experiences as exp}
        <ExperienceCard {exp} />
      {/each}
    </div>
  </div>
</div>
