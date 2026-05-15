<script lang="ts">
  import TerminalCard from "$lib/components/common/TerminalCard.svelte";
  let { project } = $props<{ project: any }>();

  let currentIndex = $state(0);
  let isZoomed = $state(false);

  const mediaList = $derived.by(() => {
    const list: string[] = [];

    if (project?.videos && Array.isArray(project.videos)) {
      project.videos.forEach((vid: string) => {
        if (vid && vid.trim()) list.push(`vid:${vid.trim()}`);
      });
    } else if (project?.video) {
      list.push(`vid:${project.video.trim()}`);
    }

    if (project?.images) {
      list.push(...project.images);
    }

    return list;
  });

  const currentIsVideo = $derived(mediaList[currentIndex]?.startsWith("vid:"));

  const next = () => (currentIndex = (currentIndex + 1) % mediaList.length);
  const prev = () =>
    (currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length);

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isZoomed) {
      return;
    }

    if (e.key === "Escape") {
      isZoomed = false;
    }

    if (e.key === "ArrowRight") {
      next();
    }

    if (e.key === "ArrowLeft") {
      prev();
    }
  };

  let touchStartX = 0;
  let touchStartY = 0;

  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx > 0 ? next() : prev();
    }
  };
</script>

<svelte:window onkeydown={handleKeydown} />

{#if mediaList.length > 0}
  <section class="mb-8 md:mb-16">
    <TerminalCard path="preview://{project.slug}">
      <div
        class="group relative aspect-video w-full overflow-hidden bg-black/40"
        ontouchstart={onTouchStart}
        ontouchend={onTouchEnd}>
        {#if currentIsVideo}
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/{mediaList[currentIndex].split(
              ':',
            )[1]}"
            title="Video showcase"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen>
          </iframe>
        {:else}
          <button
            onclick={() => (isZoomed = true)}
            class="block w-full h-full cursor-zoom-in">
            <img
              src={mediaList[currentIndex]}
              alt={project.title}
              class="w-full h-full object-contain bg-black/20" />
          </button>
        {/if}

        {#if mediaList.length > 1}
          <div
            class="pointer-events-none absolute inset-0 flex items-center justify-between px-4
                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <button
              onclick={prev}
              class="pointer-events-auto p-2.5 rounded-sm bg-black/60 text-white hover:text-accent
                     backdrop-blur-md border border-white/10 text-lg">
              ←
            </button>
            <button
              onclick={next}
              class="pointer-events-auto p-2.5 rounded-sm bg-black/60 text-white hover:text-accent
                     backdrop-blur-md border border-white/10 text-lg">
              →
            </button>
          </div>

          <div
            class="absolute bottom-3 right-4 font-mono text-xs text-white/40
                   bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/5">
            {currentIndex + 1} / {mediaList.length}
          </div>
        {/if}
      </div>
    </TerminalCard>
  </section>
{:else}
  <section class="mb-8 md:mb-16">
    <TerminalCard path="preview://{project.slug}">
      <div
        class="border-line relative aspect-video overflow-hidden rounded border
               flex items-center justify-center bg-[#0a0a0a]/50">
        <span
          class="font-mono text-6xl text-white/10 tracking-widest select-none">
          [ WIP ]
        </span>
      </div>
    </TerminalCard>
  </section>
{/if}

{#if isZoomed && !currentIsVideo}
  <div
    class="fixed inset-0 z-999 bg-black/95 backdrop-blur-xl cursor-zoom-out overflow-y-auto p-4 md:p-12"
    onclick={() => (isZoomed = false)}
    ontouchstart={onTouchStart}
    ontouchend={onTouchEnd}>
    <div class="flex min-h-full w-full items-center justify-center">
      <div class="max-w-5xl w-full py-8">
        {#key currentIndex}
          <img
            src={mediaList[currentIndex]}
            alt={project.title}
            class="mx-auto block h-auto w-auto max-w-full rounded-md shadow-2xl
                   border border-white/10 transition-opacity duration-200"
            onload={(e) =>
              ((e.currentTarget as HTMLImageElement).style.opacity = "1")}
            style="opacity: 0;" />
        {/key}

        <p
          class="text-center text-white/40 font-mono mt-6 text-xs uppercase
                 tracking-[0.2em] select-none">
          {project.title} - {currentIndex + 1} / {mediaList.length}
        </p>
      </div>
    </div>

    {#if mediaList.length > 1}
      <div class="fixed inset-y-0 left-0 flex items-center px-2 md:px-8">
        <button
          onclick={(e) => {
            e.stopPropagation();
            prev();
          }}
          class="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10
                 text-white/50 hover:text-white backdrop-blur-md border border-white/10
                 transition-all cursor-pointer group">
          <span
            class="block transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
        </button>
      </div>

      <div class="fixed inset-y-0 right-0 flex items-center px-2 md:px-8">
        <button
          onclick={(e) => {
            e.stopPropagation();
            next();
          }}
          class="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10
                 text-white/50 hover:text-white backdrop-blur-md border border-white/10
                 transition-all cursor-pointer group">
          <span
            class="block transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    {/if}

    <button
      class="fixed top-6 right-8 text-white/30 text-4xl font-light hover:text-white
             transition-colors cursor-pointer"
      onclick={() => (isZoomed = false)}>
      &times;
    </button>
  </div>
{/if}
