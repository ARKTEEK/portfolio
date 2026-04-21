<script lang="ts">
  import type { Commit } from "$lib/types";

  let { commit }: { commit: Commit } = $props();
</script>

<a
  href={commit.url}
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center gap-3 px-5 py-3 hover:bg-hover transition-colors font-mono text-xs">
  <span class="text-accent/70 shrink-0 w-24 truncate">{commit.repo}:</span>
  <span class="text-lo flex-1 truncate">{commit.msg}</span>

  {#if commit.sha}
    <span class="text-green-400 shrink-0 w-12 text-right">
      {commit.additions !== undefined ? `+${commit.additions}` : "…"}
    </span>
    <span class="text-red-400 shrink-0 w-12 text-right">
      {commit.deletions !== undefined ? `-${commit.deletions}` : "…"}
    </span>
  {/if}
</a>
