<script lang="ts">
  import { page } from "$app/state";
  import { navItems } from "$lib/data/navigation";
  import { locale } from "$lib/stores/locale";
</script>

<nav class="flex items-center pt-4 border-t border-subtle">
  {#each navItems as item, i}
    {@const isActive =
      page.url.pathname === item.href ||
      (page.url.pathname.startsWith(item.href) && item.href !== "/")}

    {#if i > 0}
      <span class="text-dim text-xs mx-2 select-none">/</span>
    {/if}

    <a
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      class="text-xs font-semibold transition-colors duration-150
        {isActive ? 'text-accent' : 'text-dim hover:text-hi'}">
      {isActive ? `[ ${item.label} ]` : item.label}
    </a>
  {/each}

  <div class="flex-1"></div>

  <button
    onclick={() => locale.set($locale === "en" ? "lt" : "en")}
    class="text-xs font-semibold cursor-pointer transition-colors duration-150 select-none"
    aria-label="Switch language">
    <span class={$locale === "en" ? "text-accent" : "text-dim hover:text-hi"}>
      EN
    </span>
    <span class="text-dim mx-1">/</span>
    <span class={$locale === "lt" ? "text-accent" : "text-dim hover:text-hi"}>
      LT
    </span>
  </button>
</nav>
