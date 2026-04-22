<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<a href={project.slug} class="block no-underline group">
  <div
    class="border border-accent-lo rounded-xl overflow-hidden bg-surface group-hover:border-accent/30 transition-all cursor-pointer h-full">
    <div
      class="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-white/5">
      <div class="flex items-center gap-3">
        <div class="flex gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
        </div>
        <span class="font-mono text-xs text-accent/80 uppercase">
          {project.type} / {project.slug}
        </span>
      </div>
    </div>

    <div class="p-5">
      <h3
        class="font-bold text-hi mb-1.5 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p class="text-sm text-lo leading-relaxed mb-4">{project.description}</p>

      {#if project.tags?.length}
        <div class="flex flex-wrap gap-1.5">
          {#each project.tags as tag}
            <span
              class="px-2 py-0.5 rounded text-2xs font-mono border border-subtle text-dim bg-hover">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</a>
