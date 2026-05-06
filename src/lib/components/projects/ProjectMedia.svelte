<script lang="ts">
  import TerminalCard from "$lib/components/common/TerminalCard.svelte";

  let { project } = $props<{ project: any }>();
  let currentIndex = $state(0);

  const mediaList = $derived.by(() => {
    const list: string[] = [];
    if (project?.video) list.push(`vid:${project.video}`);
    if (project?.images) list.push(...project.images);
    return list;
  });

  const next = () => (currentIndex = (currentIndex + 1) % mediaList.length);
  const prev = () =>
    (currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length);
</script>

{#if mediaList.length > 0}
  <section class="mb-16">
    <TerminalCard path="preview://{project.slug}">
      <div
        class="group relative aspect-video w-full overflow-hidden bg-black/40">
        {#if mediaList[currentIndex]?.startsWith("vid:")}
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/{mediaList[currentIndex].split(
              ':',
            )[1]}"
            title="Video showcase"
            frameborder="0"
            allowfullscreen>
          </iframe>
        {:else}
          <img
            src={mediaList[currentIndex]}
            alt={project.title}
            class="w-full h-full object-cover" />
        {/if}

        {#if mediaList.length > 1}
          <div
            class="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onclick={prev}
              class="p-3 bg-black/60 text-white hover:text-accent backdrop-blur-md border border-white/10 text-xl">
              ←
            </button>
            <button
              onclick={next}
              class="p-3 bg-black/60 text-white hover:text-accent backdrop-blur-md border border-white/10 text-xl">
              →
            </button>
          </div>
          <div
            class="absolute bottom-4 right-6 font-mono text-xs text-white/40 bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/5">
            {currentIndex + 1} / {mediaList.length}
          </div>
        {/if}
      </div>
    </TerminalCard>
  </section>
{/if}
