<script lang="ts">
  import PageHeader from "$lib/components/common/PageHeader.svelte";
  import SectionHeader from "$lib/components/common/SectionHeader.svelte";
  import WidgetCard from "$lib/components/home/widget/WidgetCard.svelte";
  import { services } from "$lib/data/services";
  import { _ } from "svelte-i18n";

  const workflow = $derived([
    $_("pages.services.workflow.discovery"),
    $_("pages.services.workflow.architecture"),
    $_("pages.services.workflow.development"),
    $_("pages.services.workflow.deployment"),
  ]);
</script>

<svelte:head>
  <title>{$_("pages.services.page_title")}</title>
</svelte:head>

<PageHeader
  path={$_("pages.services.path")}
  title={$_("pages.services.title")}
  description={$_("pages.services.description")} />

<section class="mb-10">
  <SectionHeader
    title={$_("pages.services.sections.services")}
    meta={$_("pages.services.meta.services")} />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each services as service}
      {@const title = $_(`pages.services.services.${service.id}.title`)}
      {@const description = $_(
        `pages.services.services.${service.id}.description`,
      )}
      <div
        class="group rounded-xl border border-line bg-surface overflow-hidden transition-all hover:border-accent/20">
        <div
          class="border-b border-subtle px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-accent font-mono text-xs">❯</span>

            <h2 class="font-mono text-xs tracking-widest uppercase text-dim">
              {service.command}
            </h2>
          </div>
        </div>

        <div class="p-5">
          <h3 class="text-lg font-bold text-hi mb-2">
            {title}
          </h3>

          <p class="text-sm leading-relaxed text-lo mb-5">
            {description}
          </p>

          <div class="flex flex-wrap gap-1.5">
            {#each service.stack as tag}
              <span
                class="rounded border border-line px-2 py-0.5 font-mono text-2xs text-dim">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="mb-10">
  <SectionHeader
    title={$_("pages.services.sections.workflow")}
    meta={$_("pages.services.meta.workflow")} />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <WidgetCard title="process.log">
      <div class="space-y-3">
        {#each workflow as step}
          <div
            class="flex items-center justify-between border border-subtle rounded-lg px-3 py-2">
            <span class="font-mono text-xs text-lo">
              {step}
            </span>

            <span class="font-mono text-2xs text-accent"> OK </span>
          </div>
        {/each}
      </div>
    </WidgetCard>

    <WidgetCard title={$_("pages.services.engagement.title")}>
      <div class="space-y-4 text-sm leading-relaxed text-lo">
        <p>
          {$_("pages.services.engagement.description")}
        </p>

        <div class="border-t border-subtle pt-4 space-y-2">
          <div class="flex justify-between font-mono text-xs">
            <span class="text-dim">
              {$_("pages.services.engagement.response_time")}
            </span>

            <span class="text-hi">&lt; 24h</span>
          </div>

          <div class="flex justify-between font-mono text-xs">
            <span class="text-dim">
              {$_("pages.services.engagement.project_status")}
            </span>

            <span class="text-emerald-400">
              {$_("pages.services.engagement.accepting_work")}
            </span>
          </div>

          <div class="flex justify-between font-mono text-xs">
            <span class="text-dim">
              {$_("pages.services.engagement.deployment")}
            </span>

            <span class="text-hi">
              {$_("pages.services.engagement.included")}
            </span>
          </div>
        </div>
      </div>
    </WidgetCard>
  </div>
</section>

<section>
  <div
    class="rounded-xl border border-accent/10 bg-accent/5 p-6 overflow-hidden relative">
    <div
      class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--color-accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-accent)_1px,transparent_1px)] bg-size-[24px_24px]">
    </div>

    <div class="relative z-10">
      <p class="font-mono text-2xs tracking-widest text-accent mb-3">
        {$_("pages.services.cta.status")}
      </p>

      <h2 class="text-2xl font-bold text-hi mb-3">
        {$_("pages.services.cta.title")}
      </h2>

      <p class="max-w-2xl text-sm leading-relaxed text-lo mb-6">
        {$_("pages.services.cta.description")}
      </p>

      <a
        href="/contact"
        class="inline-flex items-center gap-2 rounded-lg border border-accent/20 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10">
        <span class="font-mono">
          {$_("pages.services.cta.button")}
        </span>
      </a>
    </div>
  </div>
</section>
