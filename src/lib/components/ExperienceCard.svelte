<script lang="ts">
  import type { Experience } from "$lib/types";
  import { _ } from "svelte-i18n";
  import TerminalCard from "./common/TerminalCard.svelte";

  let {
    exp,
    hash = "",
  }: {
    exp: Experience;
    hash?: string;
  } = $props();

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

<TerminalCard path="~/{$_('pages.experience.path')}/{exp.id}">
  {#snippet ribbonRight()}
    <div class="flex items-center gap-2 font-mono text-2xs">
      {#if hash}
        <span class="text-accent/60 tracking-widest">
          {hash}
        </span>
      {/if}

      {#if exp.website}
        <a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          class="text-2xs font-mono text-accent/60 hover:text-accent transition-colors"
          onclick={(e) => e.stopPropagation()}>
          [ {$_("pages.experience.view_website")} ]
        </a>
      {/if}
    </div>
  {/snippet}

  <div class="p-4 flex flex-col gap-3">
    <div>
      <h3 class="text-hi font-bold">
        {role}
      </h3>

      <p class="text-xs font-mono">
        <span class="text-accent font-semibold">@{exp.company}</span>
        <span class="text-dim mx-1">·</span>
        <span class="text-hi/80">{period}</span>
      </p>
    </div>

    <p class="text-sm text-lo leading-relaxed">
      {description}
    </p>

    {#if highlights && highlights.length > 0}
      <div class="space-y-2 mt-2">
        {#each highlights as item}
          <div class="flex gap-2 text-sm text-lo leading-relaxed">
            <span class="text-accent/50 font-mono">›</span>
            <span>{item}</span>
          </div>
        {/each}
      </div>
    {/if}

    {#if exp.tags?.length}
      <div class="flex flex-wrap gap-1.5 mt-3">
        {#each exp.tags as tag}
          <span
            class="rounded border border-line px-2 py-0.5 font-mono text-2xs text-dim">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</TerminalCard>
