<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { sidebarOpen } from "$lib/stores/sidebar";
  import "../app.css";
</script>

<div class="flex min-h-screen">
  <Sidebar />

  <main
    class="content flex-1 min-h-screen transition-[margin] duration-300 ease-in-out"
    style="margin-left: {$sidebarOpen ? '260px' : '68px'}">

    <div class="w-full md:w-[70%] max-w-6xl mx-auto px-6 py-16">
      <slot />
    </div>
  </main>
</div>
