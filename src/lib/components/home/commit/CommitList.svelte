<script lang="ts">
  import { getCommitStats, getRecentCommits } from "$lib/github";
  import type { Commit } from "$lib/types";
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import CommitItem from "./CommitItem.svelte";

  let commits = $state<Commit[]>([]);
  let loading = $state(true);
  let errorMessage = $state<string | null>(null);
  const username = "ARKTEEK";

  onMount(async () => {
    try {
      const data = await getRecentCommits(username);
      commits = data;

      if (commits.length === 0) {
        errorMessage = "EMPTY";
      }

      commits.forEach(async (c, i) => {
        if (!c.sha) return;
        const stats = await getCommitStats(c.repoFull, c.sha);
        commits[i] = { ...commits[i], ...stats };
      });
    } catch (e: any) {
      if (e.message === "RATE_LIMITED") {
        errorMessage = "API rate limit exceeded. Try again later.";
      } else {
        errorMessage = "Failed to load activity.";
      }
    } finally {
      loading = false;
    }
  });
</script>

<section class="border border-line rounded-xl bg-surface overflow-hidden">
  <header
    class="flex items-center justify-between px-5 py-4 border-b border-subtle">
    <p class="text-sm font-bold text-hi">{$_("widgets.commits.label")}</p>
    <a
      href="https://github.com/{username}"
      target="_blank"
      class="text-xs font-mono text-accent">{$_("widgets.commits.link")} ↗</a>
  </header>

  <div class="divide-y divide-subtle max-h-64 overflow-y-auto custom-scrollbar">
    {#if loading}
      <div
        class="px-5 py-8 text-center text-dim font-mono text-xs animate-pulse">
        {$_("common.loading")}
      </div>
    {:else if errorMessage}
      <div class="px-5 py-12 text-center">
        <p class="text-dim font-mono text-xs">
          {errorMessage === "EMPTY"
            ? $_("widgets.commits.empty")
            : errorMessage}
        </p>
        {#if errorMessage.includes("rate limit")}
          <p class="text-[10px] text-dim/50 font-mono mt-2 italic">
            {$_("widgets.commits.rate_limit")}
          </p>
        {/if}
      </div>
    {:else}
      {#each commits as commit}
        <CommitItem {commit} />
      {/each}
    {/if}
  </div>
</section>
