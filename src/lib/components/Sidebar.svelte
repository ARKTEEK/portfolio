<script lang="ts">
  import { page } from "$app/state";
  import { navItems, profile } from "$lib/data/navigation";
  import { locale, type Locale } from "$lib/stores/locale";
  import { sidebarOpen } from "$lib/stores/sidebar";

  function setLocale(l: Locale) {
    locale.set(l);
  }
</script>

<aside
  class="fixed top-0 left-0 h-screen bg-surface border-r border-subtle flex flex-col z-50 shadow-sm"
  style="width: {$sidebarOpen ? '260px' : '68px'}">
  <div class="flex items-center h-18 px-4 border-b border-subtle shrink-0">
    <div class="flex items-center gap-3 min-w-0">
      <div
        class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 overflow-hidden">
        {#if profile.avatar}
          <img
            src={profile.avatar}
            alt={profile.name}
            class="w-full h-full object-cover" />
        {:else}
          <span class="text-xs font-bold text-accent">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        {/if}
      </div>

      {#if $sidebarOpen}
        <div class="flex flex-col min-w-0">
          <p class="text-sm font-semibold text-hi leading-tight truncate">
            {profile.name}
          </p>
          <p class="text-2xs font-medium text-dim uppercase tracking-wider">
            {profile.role}
          </p>
        </div>
      {/if}
    </div>
  </div>

  <nav class="flex-1 py-4 px-3 overflow-y-auto overflow-x-hidden">
    <ul class="list-none p-0 m-0 space-y-1">
      {#each navItems as item}
        {@const isActive =
          page.url.pathname === item.href ||
          (page.url.pathname.startsWith(item.href) && item.href !== "/")}

        <li>
          <a
            href={item.href}
            class="flex items-center relative h-10 rounded-lg
            {isActive
              ? 'bg-accent/10 text-accent'
              : 'text-dim hover:bg-hover hover:text-hi'}"
            aria-current={isActive ? "page" : undefined}>
            <div class="flex items-center justify-center w-10 shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d={item.icon} />
              </svg>
            </div>

            {#if $sidebarOpen}
              <span class="text-sm font-semibold whitespace-nowrap ml-1"
                >{item.label}</span>
            {/if}

            {#if isActive}
              <div class="absolute left-0 w-1 h-5 bg-accent rounded-r-full">
              </div>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="px-3 py-4 border-t border-subtle bg-surface/50">
    <div class="flex items-center bg-hover rounded-lg p-1 relative">
      {#if $sidebarOpen}
        <button
          onclick={() => setLocale("en")}
          class="flex-1 text-2xs font-bold py-1.5 rounded-md z-10 cursor-pointer
          {$locale === 'en'
            ? 'text-hi bg-surface border border-subtle shadow-sm'
            : 'text-dim hover:text-hi'}">
          EN
        </button>
        <button
          onclick={() => setLocale("lt")}
          class="flex-1 text-2xs font-bold py-1.5 rounded-md z-10 cursor-pointer
          {$locale === 'lt'
            ? 'text-hi bg-surface border border-subtle shadow-sm'
            : 'text-dim hover:text-hi'}">
          LT
        </button>
      {:else}
        <button
          onclick={() => setLocale($locale === "en" ? "lt" : "en")}
          class="w-full aspect-square flex items-center justify-center text-[10px] font-bold text-accent uppercase">
          {$locale}
        </button>
      {/if}
    </div>
  </div>

  <button
    onclick={() => sidebarOpen.toggle()}
    class="flex items-center justify-center h-12 text-dim hover:text-hi cursor-pointer hover:bg-hover border-t border-subtle"
    aria-label={$sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      {#if $sidebarOpen}
        <path d="M15 18l-6-6 6-6" />
      {:else}
        <path d="M9 18l6-6-6-6" />
      {/if}
    </svg>
  </button>
</aside>
