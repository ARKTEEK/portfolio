<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<main class="min-h-screen pt-4">
  <div class="w-full md:w-[70%] max-w-6xl mx-auto px-6">
    <Nav />

    <div class="py-16">
      {@render children()}
    </div>
  </div>
</main>
