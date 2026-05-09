<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    path,
    class: klass = "",
    ribbonRight,
    children,
  }: {
    path: string;
    class?: string;
    ribbonRight?: Snippet;
    children?: Snippet;
  } = $props();

  const shortPath = $derived(`~/${path.split("/").at(-1) ?? ""}`);
</script>

<div
  class="group relative bg-surface border-line border rounded-xl transition-all hover:border-accent/30 {klass}">
  <div
    class="flex items-center gap-2 border-b border-line bg-black/25 px-3.5 py-2 rounded-t-[0.4rem] min-w-0">
    <div class="flex items-center gap-1.5 min-w-0 flex-1">
      <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f57]"></span>
      <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-[#febc2e]"></span>
      <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28c840]"></span>
      <span
        class="ml-2 hidden sm:block font-mono text-2xs uppercase tracking-widest text-accent/70 truncate">
        {path}
      </span>
      <span
        class="ml-2 sm:hidden font-mono text-2xs uppercase tracking-widest text-accent/70 truncate">
        {shortPath}
      </span>
    </div>

    {#if ribbonRight}
      <div class="shrink-0 flex items-center">
        {@render ribbonRight()}
      </div>
    {/if}
  </div>
  {@render children?.()}
</div>
