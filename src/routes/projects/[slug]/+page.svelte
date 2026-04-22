<script lang="ts">
  import { page } from "$app/stores";
  import { projects } from "$lib/data/projects";

  const project = projects.find((p) => p.slug === $page.params.slug);

  let currentIndex = $state(0);

  const mediaList = $derived.by(() => {
    const list = [];
    if (project?.video) list.push(`vid:${project.video}`);
    if (project?.images) list.push(...project.images);
    return list;
  });

  const next = () => (currentIndex = (currentIndex + 1) % mediaList.length);
  const prev = () =>
    (currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length);

  function highlight(text: string) {
    return text.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="text-accent font-medium">$1</span>',
    );
  }
</script>

{#if project}
  <article class="max-w-4xl mx-auto py-12 px-4">
    <div class="flex justify-between items-center mb-12">
      <a
        href="/projects"
        class="text-xs font-mono text-dim hover:text-accent transition-all flex items-center gap-2 group">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> BACK_TO_PROJECTS
      </a>

      <div class="text-xs font-mono">
        {#if project.link && project.link !== ""}
          <a
            href={project.link}
            target="_blank"
            class="text-accent hover:text-hi transition-colors px-3 py-1">
            [ VIEW_SOURCE ]
          </a>
        {:else}
          <span class="text-dim/40 cursor-help" title="Private Repository">
            [ PRIVATE_REPO ]
          </span>
        {/if}
      </div>
    </div>

    <div class="mb-12 space-y-4">
      <div
        class="group relative aspect-video w-full rounded-2xl overflow-hidden border border-line bg-surface shadow-2xl">
        {#if mediaList[currentIndex]?.startsWith("vid:")}
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/{mediaList[currentIndex].split(
              ':',
            )[1]}"
            title="Video showcase"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        {:else}
          <img
            src={mediaList[currentIndex]}
            alt={project.title}
            class="w-full h-full object-cover transition-all duration-500" />
        {/if}

        {#if mediaList.length > 1}
          <div
            class="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
            <button
              onclick={prev}
              class="pointer-events-auto p-3 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:scale-110 border border-white/10">
              ←
            </button>
            <button
              onclick={next}
              class="pointer-events-auto p-3 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:scale-110 border border-white/10">
              →
            </button>
          </div>

          <div
            class="absolute bottom-4 right-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-white/70">
            {currentIndex + 1} / {mediaList.length}
          </div>
        {/if}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="md:col-span-2">
        <h1 class="text-5xl font-bold text-hi mb-6 tracking-tight">
          {project.title}
        </h1>

        <div class="space-y-8">
          <p
            class="text-xl text-lo leading-relaxed border-l-2 border-accent/40 pl-6 py-1">
            {project.description}
          </p>

          {#if project.content}
            <div class="space-y-5">
              {#each project.content as line}
                {#if line.startsWith("-")}
                  <div class="flex gap-4 items-start group">
                    <span
                      class="text-accent font-bold mt-1.5 transition-transform group-hover:translate-x-1">
                      —
                    </span>
                    <p class="text-lo leading-relaxed text-lg">
                      {@html highlight(line.substring(1).trim())}
                    </p>
                  </div>
                {:else if line.startsWith(">")}
                  <p
                    class="text-dim/80 border-l border-line/50 pl-5 italic text-lg py-1">
                    {@html highlight(line.substring(1).trim())}
                  </p>
                {:else}
                  <p class="text-lo leading-relaxed text-lg">
                    {@html highlight(line)}
                  </p>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <aside class="space-y-10">
        <div>
          <h3
            class="text-2xs font-mono text-dim tracking-[0.2em] uppercase mb-4 opacity-70">
            tech_stack
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span
                class="px-2.5 py-1 rounded bg-accent/5 border border-accent/10 text-xs font-mono text-accent/90 hover:border-accent/40 transition-colors">
                {tag}
              </span>
            {/each}
          </div>
        </div>

        <div>
          <h3
            class="text-2xs font-mono text-dim tracking-[0.2em] uppercase mb-4 opacity-70">
            classification
          </h3>
          <span
            class="px-2.5 py-1 rounded border border-accent/10 text-accent text-2xs font-mono uppercase bg-accent/5 tracking-wider">
            {project.type}
          </span>
        </div>
      </aside>
    </div>
  </article>
{:else}
  <div class="h-[80vh] flex flex-col items-center justify-center text-center">
    <p class="font-mono text-dim mb-6 text-sm tracking-tighter">
      // ERROR: project_missing_in_data_array
    </p>
    <a
      href="/projects"
      class="px-6 py-2 border border-line hover:border-accent hover:text-accent transition-all text-xs font-mono uppercase tracking-widest">
      [ return_to_base ]
    </a>
  </div>
{/if}

<style>
  img {
    view-transition-name: project-image;
  }

  :global(html) {
    scroll-behavior: smooth;
  }
</style>
