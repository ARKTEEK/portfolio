<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { projects } from "$lib/data/projects";
  import { _, locale } from "svelte-i18n";

  import PageHeader from "$lib/components/common/PageHeader.svelte";
  import ProjectContent from "$lib/components/projects/ProjectContent.svelte";
  import ProjectMedia from "$lib/components/projects/ProjectMedia.svelte";
  import ProjectSidebar from "$lib/components/projects/ProjectSidebar.svelte";

  const project = projects.find((p) => p.slug === $page.params.slug);

  const contentLines = $derived.by(() => {
    const key = `projects.${project?.slug}.content`;
    const translated = $_(key);
    return translated !== key && Array.isArray(translated)
      ? translated
      : (project?.content ?? []);
  });

  const description = $derived(
    $_(`projects.${project?.slug}.description`, {
      default: project?.description ?? "",
    }),
  );
</script>

{#if project}
  <div class="max-w-6xl mx-auto px-4 pb-20">
    <PageHeader
      path="projects/{project.slug}"
      title={project.title}
      {description}
      backUrl="{base}/{$locale}/projects" />

    <ProjectMedia {project} />

    <div class="grid grid-cols-1 md:grid-cols-12 gap-16">
      <ProjectContent {contentLines} />
      <ProjectSidebar {project} />
    </div>
  </div>
{:else}
  <div
    class="h-[80vh] flex flex-col items-center justify-center text-center font-mono">
    <p class="text-dim text-sm mb-6">// ERROR: project_not_found</p>
    <a
      href="{base}/{$locale}/projects"
      class="px-8 py-3 border border-line hover:border-accent hover:text-accent transition-all text-xs uppercase tracking-widest">
      [ cd ../projects ]
    </a>
  </div>
{/if}
