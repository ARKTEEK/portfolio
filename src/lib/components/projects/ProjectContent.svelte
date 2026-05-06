<script lang="ts">
  let { contentLines = [] } = $props<{ contentLines: string[] }>();

  function fmt(text: string): string {
    return text.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="text-accent font-semibold">$1</span>',
    );
  }

  type LineType = "h1" | "h2" | "h3" | "li" | "blockquote" | "p";
  type Block =
    | { kind: "ul"; items: string[] }
    | { kind: "single"; type: Exclude<LineType, "li">; text: string };

  const blocks = $derived.by((): Block[] => {
    const result: Block[] = [];

    const lines = Array.isArray(contentLines) ? contentLines : [];

    for (const raw of lines) {
      const trimmed = raw.trim();
      if (!trimmed) continue;

      if (trimmed.startsWith("- ")) {
        const text = trimmed.slice(2);
        const last = result[result.length - 1];
        if (last?.kind === "ul") {
          last.items.push(text);
        } else {
          result.push({ kind: "ul", items: [text] });
        }
      } else {
        let type: LineType = "p";
        let text = raw;

        if (raw.startsWith("### ")) {
          type = "h3";
          text = raw.slice(4);
        } else if (raw.startsWith("## ")) {
          type = "h2";
          text = raw.slice(3);
        } else if (raw.startsWith("# ")) {
          type = "h1";
          text = raw.slice(2);
        } else if (raw.startsWith("> ")) {
          type = "blockquote";
          text = raw.slice(2);
        }

        result.push({ kind: "single", type: type as any, text });
      }
    }
    return result;
  });
</script>

<article class="md:col-span-8 prose-custom font-sans">
  {#each blocks as block}
    {#if block.kind === "ul"}
      <ul class="my-6 space-y-4">
        {#each block.items as item}
          <li class="flex gap-4 text-lo/90 leading-relaxed text-lg">
            <span class="text-accent mt-2 leading-none text-xs">■</span>
            <span>{@html fmt(item)}</span>
          </li>
        {/each}
      </ul>
    {:else if block.type === "h1"}
      <h1 class="text-3xl font-bold text-hi mt-12 mb-6 first:mt-0">
        {@html fmt(block.text)}
      </h1>
    {:else if block.type === "h2"}
      <h2
        class="text-xl font-semibold text-hi mt-12 mb-6 border-b border-line pb-2">
        {@html fmt(block.text)}
      </h2>
    {:else if block.type === "h3"}
      <h3
        class="text-sm font-mono text-accent uppercase tracking-[0.3em] mt-10 mb-4">
        {@html fmt(block.text)}
      </h3>
    {:else if block.type === "blockquote"}
      <blockquote
        class="border-l-2 border-accent/40 pl-6 py-1 my-10 text-dim italic bg-accent/5">
        {@html fmt(block.text)}
      </blockquote>
    {:else}
      <p class="text-lo/80 leading-relaxed mb-6 text-lg">
        {@html fmt(block.text)}
      </p>
    {/if}
  {/each}
</article>
