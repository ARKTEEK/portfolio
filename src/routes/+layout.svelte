<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "../app.css";
</script>

<div class="flex min-h-screen">
  <Sidebar />
  <main class="ml-sidebar flex-1 min-h-screen">
    <div class="max-w-2xl px-14 py-16">
      <slot />
    </div>
  </main>
</div>
