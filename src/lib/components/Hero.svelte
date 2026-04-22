<script lang="ts">
  export let name = "Mindaugas";
  export let location = "Lithuania, Kaunas";
  const resumeUrl = "/resume.pdf";
  const githubUrl = "https://github.com/ARKTEEK";
  const emailUrl = "mailto:minlekav@gmail.com";
</script>

<header class="mb-12">
  <h1 class="text-3xl font-bold text-hi mb-4 tracking-tight">
    Hey! I'm <span class="text-accent">{name}.</span>
  </h1>

  <p class="text-base text-lo leading-relaxed max-w-2xl mb-6">
    Full-Stack Developer based in
    <a
      href="https://www.google.com/maps/place/Kaunas"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accent underline underline-offset-4 decoration-dotted hover:decoration-solid transition-all">
      {location}</a
    >. I build reliable backends with
    <span class="text-hi font-medium">Java</span> &
    <span class="text-hi font-medium">.NET</span> and sharp UIs with
    <span class="text-hi font-medium">Svelte</span>
    &
    <span class="text-hi font-medium">React</span>.
  </p>

  <div class="flex items-center gap-2">
    <a
      href={resumeUrl}
      download
      class="flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-color-accent text-accent text-sm font-semibold rounded-lg hover:bg-text-accent hover:text-white transition-all shadow-sm">
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
      Resume
    </a>

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
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path
          d="M9 18c-4.51 2-5-2-7-2" />
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
