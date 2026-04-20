<script lang="ts">
  export let name = "Mindaugas";
  export let location = "Lithuania, Kaunas";
</script>

<header class="mb-10">
  <h1 class="text-3xl font-bold text-hi mb-4 tracking-tight">
    Hey! I'm <span class="text-accent">{name}.</span>
  </h1>
  <p class="text-base text-lo leading-relaxed max-w-2xl mb-2">
    Full-Stack Developer based in
    <a
      href="https://maps.google.com"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accent underline underline-offset-2 decoration-dotted hover:decoration-solid transition-all">
      {location}</a
    >. I build reliable backends with
    <span class="text-hi font-medium">Java</span> &
    <span class="text-hi font-medium">.NET</span>
    and sharp UIs with <span class="text-hi font-medium">Svelte</span> &
    <span class="text-hi font-medium">React</span>.
  </p>
</header>
