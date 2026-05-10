<script lang="ts">
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import PageHeader from "$lib/components/common/PageHeader.svelte";
  import SectionHeader from "$lib/components/common/SectionHeader.svelte";
  import { experiences } from "$lib/data/experience";
  import { _ } from "svelte-i18n";

  const HASHES = [
    "a3f2b91",
    "8c4d2e1",
    "1f9a3c7",
    "0d5e8b2",
    "c7f1a4d",
    "3b9e2f0",
  ];
</script>

<svelte:head>
  <title>{$_("pages.experience.title")}</title>
</svelte:head>

<PageHeader
  path={$_("pages.experience.path")}
  title={$_("pages.experience.title")}
  description={$_("pages.experience.description")} />

<section class="mb-8">
  <SectionHeader title={$_("pages.experience.sections.timeline")} meta={$_("pages.experience.sections.git")} />

  <div class="hidden md:block relative">
    <div class="absolute left-1.75 top-0 bottom-0 w-px bg-accent/20"></div>

    <div class="flex flex-col gap-6">
      {#each experiences as exp, i}
        <div class="relative flex gap-6 items-start group">
          <div class="relative z-10 pt-6 shrink-0">
            {#if i === experiences.length - 1}
              <div
                class="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent to-surface z-0">
              </div>
            {/if}

            <div
              class="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-accent/30 bg-surface transition-all duration-200 group-hover:scale-110 group-hover:border-accent/50">
              <div class="h-1.5 w-1.5 rounded-full bg-accent"></div>
            </div>
          </div>

          <div class="flex-1 min-w-0">
            <ExperienceCard {exp} hash={HASHES[i % HASHES.length]} />
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="md:hidden flex flex-col gap-5">
    {#each experiences as exp, i}
      <ExperienceCard {exp} hash={HASHES[i % HASHES.length]} />
    {/each}
  </div>
</section>
