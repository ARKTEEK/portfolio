<script lang="ts">
  let { path, title, description } = $props<{
    path: string;
    title: string;
    description: string;
  }>();
</script>

<header class="mb-10">
  <p class="text-xs font-mono text-accent/60 tracking-widest uppercase mb-2">
    ~/{path}
  </p>
  <h1 class="text-2xl font-bold text-hi tracking-tight mb-3">{title}</h1>
  <p class="text-sm text-lo leading-relaxed max-w-xl mb-6">{description}</p>
</header>
