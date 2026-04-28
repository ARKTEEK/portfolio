<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    children: Snippet;
    class?: string;
  }

  let { title, children, class: cls = "" }: Props = $props();
</script>

<div
  class="border border-line rounded-xl bg-surface flex flex-col gap-1 p-4 h-full {cls}">
  <div class="flex items-center gap-2 pb-3 border-b border-subtle">
    <span class="text-xs font-mono text-accent">❯</span>
    <p class="text-xs font-mono text-dim tracking-widest uppercase">{title}</p>
  </div>
  {@render children()}
</div>
