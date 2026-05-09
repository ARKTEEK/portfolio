<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { navItems } from "$lib/data/navigation";
  import type { Locale } from "$lib/i18n";
  import { _, locale } from "svelte-i18n";

  function getLocalizedHref(path: string) {
    const lang = $locale || "en";
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}/${lang}${cleanPath === "/" ? "" : cleanPath}`;
  }

  function switchLocale(newLocale: Locale) {
    if ($locale === newLocale) return;
    const segments = page.url.pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPath = `/${segments.join("/")}`;
    goto(newPath);
  }

  function isPathActive(fullHref: string, isHome: boolean) {
    const currentPath = page.url.pathname.replace(/\/$/, "");
    const targetPath = fullHref.replace(/\/$/, "");
    if (isHome) {
      return currentPath === targetPath;
    }
    return currentPath.startsWith(targetPath);
  }
</script>

<nav class="flex items-center pt-4 border-t border-subtle">
  {#each navItems as item, i}
    {@const fullHref = getLocalizedHref(item.href)}
    {@const isActive = isPathActive(fullHref, item.href === "/")}
    {@const label = $_(`nav.${item.id}`)}
    {#if i > 0}
      <span class="text-dim text-xs mx-2 select-none">/</span>
    {/if}
    <a
      href={fullHref}
      aria-current={isActive ? "page" : undefined}
      class="text-xs font-semibold transition-colors duration-150
        {isActive ? 'text-accent' : 'text-dim hover:text-hi'}">
      {#if isActive}
        <span class="hidden sm:inline">[ {label} ]</span>
        <span class="sm:hidden">[{label}]</span>
      {:else}
        {label}
      {/if}
    </a>
  {/each}

  <div class="hidden sm:block flex-1 border-t border-dashed border-line mx-3">
  </div>

  <div class="flex gap-1 shrink-0 ml-auto sm:ml-0">
    <button
      onclick={() => switchLocale("en")}
      class="text-xs font-semibold cursor-pointer select-none {$locale === 'en'
        ? 'text-accent cursor-not-allowed'
        : 'text-dim hover:text-hi'}"
      disabled={$locale === "en"}
      aria-label="Switch to English">
      EN
    </button>
    <span class="text-dim text-xs">/</span>
    <button
      onclick={() => switchLocale("lt")}
      class="text-xs font-semibold cursor-pointer select-none {$locale === 'lt'
        ? 'text-accent cursor-not-allowed'
        : 'text-dim hover:text-hi'}"
      disabled={$locale === "lt"}
      aria-label="Switch to Lithuanian">
      LT
    </button>
  </div>
</nav>
