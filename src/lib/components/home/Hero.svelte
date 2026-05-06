<script lang="ts">
  import { _, locale } from "svelte-i18n";

  const resumeFiles = {
    en: "/Lekavicius_Mindaugas_EN_Resume.pdf",
    lt: "/Lekavicius_Mindaugas_LT_Resume.pdf",
  };

  const githubUrl = "https://github.com/ARKTEEK";
  const emailUrl = "mailto:minlekav@gmail.com";

  let resumeOpen = $state(false);

  function toggleResume() {
    resumeOpen = !resumeOpen;
  }

  function closeResume() {
    resumeOpen = false;
  }
</script>

<header class="mb-10">
  <h1 class="text-3xl font-bold text-hi mb-4 tracking-tight">
    {$_("hero.greeting")} <span class="text-accent">{$_("hero.name")}</span>
  </h1>

  <p class="text-base text-lo leading-relaxed max-w-2xl mb-6">
    {$_("hero.role")}
    <a
      href="https://www.google.com/maps/place/Kaunas"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accent underline underline-offset-4 decoration-dotted hover:decoration-solid transition-all">
      {$_("hero.based_in")}</a
    >. {$_("hero.bio")}
  </p>

  <div class="flex items-center gap-2 mb-6">
    <div class="relative">
      <button
        onclick={toggleResume}
        class="flex w-fit min-w-[140px] items-center justify-center gap-2 px-4 py-2.5 bg-transparent border-2 border-accent text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-canvas transition-all cursor-pointer whitespace-nowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>

        {$_("hero.resume")}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="transition-transform duration-200 {resumeOpen
            ? 'rotate-180'
            : ''}">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {#if resumeOpen}
        <div
          class="absolute top-full left-0 mt-1.5 w-full rounded-lg border border-accent/20 bg-canvas shadow-lg overflow-hidden z-10"
          onmouseleave={closeResume}>
          <a
            href={resumeFiles.en}
            download
            onclick={closeResume}
            class="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all
                   {$locale === 'en'
              ? 'text-accent bg-accent/5'
              : 'text-lo hover:text-accent hover:bg-accent/10'}">
            <span class="text-base leading-none">🇬🇧</span>
            {$_("hero.resume_en")}
          </a>
          <div class="h-px bg-lo/10 mx-3"></div>

          <a
            href={resumeFiles.lt}
            download
            onclick={closeResume}
            class="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all
                   {$locale === 'lt'
              ? 'text-accent bg-accent/5'
              : 'text-lo hover:text-accent hover:bg-accent/10'}">
            <span class="text-base leading-none">🇱🇹</span>
            {$_("hero.resume_lt")}
          </a>
        </div>
      {/if}
    </div>

    <div class="h-6 w-px bg-lo/20 mx-1"></div>
    <a
      href={githubUrl}
      target="_blank"
      class="p-2.5 text-lo hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
      aria-label="GitHub">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />

        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    </a>

    <a
      href={emailUrl}
      class="p-2.5 text-lo hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
      aria-label="Email">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    </a>
  </div>
</header>
