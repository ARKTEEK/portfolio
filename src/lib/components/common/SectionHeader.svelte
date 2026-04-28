<script lang="ts">
  interface Props {
    title: string;
    meta?: string;
    href?: string;
    hrefLabel?: string;
    action?: string;
    onaction?: () => void;
  }

  let {
    title,
    meta,
    href,
    hrefLabel = "[ls all]",
    action,
    onaction,
  }: Props = $props();
</script>

<div class="flex items-center gap-3 mb-5">
  <span class="text-xs font-mono text-accent">❯</span>
  <span class="text-xs font-mono text-hi tracking-widest uppercase">
    {title}
  </span>
  <div class="flex-1 border-t border-dashed border-line"></div>
  {#if meta}
    <span class="text-xs font-mono text-dim">[{meta}]</span>
  {/if}
  {#if action && onaction}
    <button
      onclick={onaction}
      class="text-xs font-mono text-dim hover:text-lo transition-colors cursor-pointer">
      {action}
    </button>
  {/if}
  {#if href}
    <a
      {href}
      class="text-xs font-mono text-accent/70 hover:text-accent transition-colors">
      {hrefLabel}
    </a>
  {/if}
</div>
