/** Minimal markdown-ish renderer: supports "## " headings, "- " lists and paragraphs. */
export function PostBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-10 text-2xl font-bold tracking-tight text-foreground">
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (block.startsWith("# ")) {
          return (
            <h2 key={i} className="mt-10 text-2xl font-bold tracking-tight text-foreground">
              {block.replace(/^#\s+/, "")}
            </h2>
          );
        }
        if (/^[-*]\s+/.test(block)) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 text-muted-foreground">
              {block.split("\n").map((line, j) => (
                <li key={j}>{line.replace(/^[-*]\s+/, "")}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-lg leading-relaxed text-muted-foreground">
            {block}
          </p>
        );
      })}
    </div>
  );
}
