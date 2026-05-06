<script lang="ts">
  import type { Experience } from "$lib/types";
  import { _ } from "svelte-i18n";
  import TerminalCard from "./common/TerminalCard.svelte";

  let { exp }: { exp: Experience } = $props();

  const slug = $derived(
    exp.company?.toLowerCase().replace(/\s+/g, "-") ?? "unknown",
  );

  const role = $derived($_(`experience.${exp.id}.role`));
  const period = $derived($_(`experience.${exp.id}.period`));
  const description = $derived($_(`experience.${exp.id}.description`));
  const highlights = $derived(
    $_(`experience.${exp.id}.highlights`, {
      //@ts-ignore
      default: exp.highlights,
    }) as unknown as string[],
  );
</script>

{#if exp}
  <TerminalCard path="~/{$_("pages.experience.window_path")}/{slug}" class="overflow-visible">
    {#snippet ribbonRight()}
      {#if exp.website}
        <a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-2xs tracking-widest text-accent no-underline opacity-70 transition-opacity hover:opacity-100">
          [ {$_("pages.experience.view_website")} ]
        </a>
      {/if}
    {/snippet}

    <div class="absolute -left-12.25 top-7 flex items-center">
      <div class="h-0.5 w-4 bg-accent/20"></div>
      <div class="h-3 w-3 rounded-full border-2 border-accent/40 bg-surface">
      </div>
    </div>

    <div class="p-6">
      <div class="mb-4">
        <h2 class="mb-1 text-xl font-semibold tracking-tight text-hi">
          {role}
        </h2>
        <p class="flex items-center gap-2 font-mono text-xs">
          <span class="text-accent">@{exp.company}</span>
          <span class="text-dim">·</span>
          <span class="text-dim">{period}</span>
        </p>
      </div>

      <p class="mb-5 text-sm font-light leading-relaxed text-lo">
        {description}
      </p>

      {#if highlights?.length}
        <ul class="mb-5 flex flex-col gap-2.5">
          {#each highlights as highlight}
            <li class="flex gap-3 text-sm leading-relaxed text-lo">
              <span class="mt-px shrink-0 font-mono text-accent/40">›</span>
              <span>{highlight}</span>
            </li>
          {/each}
        </ul>
      {/if}

      {#if exp.tags?.length}
        <div class="flex flex-wrap gap-1.5">
          {#each exp.tags as tag}
            <span
              class="rounded border border-line px-2 py-0.5 font-mono text-[0.7rem] text-dim transition-colors group-hover:border-accent/20 group-hover:text-lo">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </TerminalCard>
{/if}
