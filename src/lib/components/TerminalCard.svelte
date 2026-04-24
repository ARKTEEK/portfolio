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
</script>

<div
  class="group relative bg-surface border-line border rounded-xl transition-all hover:border-accent/30 {klass}">
  <div
    class="flex items-center justify-between border-b border-line bg-black/25 px-3.5 py-2 rounded-t-[0.4rem]">
    <div class="flex items-center gap-1.5">
      <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
      <span
        class="ml-2 font-mono text-2xs uppercase tracking-widest text-accent/70">
        {path}
      </span>
    </div>
    {#if ribbonRight}
      {@render ribbonRight()}
    {/if}
  </div>
  {@render children?.()}
</div>
