<script lang="ts">
  import type { Commit } from "$lib/types";

  export let commits: Commit[] = [];
  export let githubUrl = "https://github.com/ARKTEEK";
</script>

<section class="border border-subtle rounded-xl bg-surface overflow-hidden">
  <div
    class="flex items-center justify-between px-5 py-4 border-b border-subtle">
    <p class="flex items-center gap-2 text-sm font-bold text-hi">
      Recent Commits
    </p>
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="text-xs font-mono text-accent hover:text-accent/70 transition-colors">
      [info] View on GitHub ↗
    </a>
  </div>

  <div class="divide-y divide-subtle">
    {#each commits as c}
      <div
        class="flex items-center gap-3 px-5 py-3 hover:bg-hover transition-colors font-mono text-xs">
        <span class="text-accent/70 shrink-0 w-24 truncate">{c.repo}:</span>
        <span class="text-lo flex-1 truncate">{c.msg}</span>
        <span class="text-green-400 shrink-0">{c.additions}</span>
        <span class="text-red-400 shrink-0">{c.deletions}</span>
      </div>
    {:else}
      <div class="px-5 py-8 text-center text-dim font-mono text-xs">
        No recent activity found.
      </div>
    {/each}
  </div>
</section>
