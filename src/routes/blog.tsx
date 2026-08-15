import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpRight, Mail } from "lucide-react";
import { listPublishedPosts } from "@/lib/blog.functions";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/blog")({
  loader: () => listPublishedPosts(),
  head: () => ({
    meta: [
      { title: "Blog — Growth Marketing Insights | CliqRush" },
      { name: "description", content: "Tactics, teardowns and case studies on SEO, paid ads, content, CRO and growth." },
      { property: "og:title", content: "CliqRush Blog" },
      { property: "og:description", content: "Growth marketing insights from our team." },
      { property: "og:url", content: "https://cliqrush.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://cliqrush.lovable.app/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { posts, error } = Route.useLoaderData();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );

  const filtered = posts.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (q === "" || p.title.toLowerCase().includes(q.toLowerCase())),
  );
  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="The CliqRush Blog"
        title="Growth marketing insights, frameworks and teardowns."
        description="Real tactics from our team working with brands across SEO, paid, content and CRO."
      />

      <Section>
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  cat === c ? "border-brand bg-brand text-brand-foreground" : "text-foreground hover:border-brand/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="mt-8 text-sm text-muted-foreground">{error}</p>}
        {!error && posts.length === 0 && (
          <p className="mt-8 text-sm text-muted-foreground">No articles published yet.</p>
        )}

        {featured && cat === "All" && q === "" && (
          <article className="mt-10 overflow-hidden rounded-3xl border bg-card shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 bg-gradient-brand lg:h-auto">
                {featured.cover_image_url && (
                  <img src={featured.cover_image_url} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                )}
                <div className="absolute inset-0 bg-gradient-mesh opacity-50 mix-blend-overlay" />
                <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">Featured</div>
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">{featured.category} · {featured.read_time}</div>
                <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: featured.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-3xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative h-40 bg-gradient-brand opacity-90">
                {p.cover_image_url && (
                  <img src={p.cover_image_url} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">{p.category} · {p.read_time}</div>
                <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-surface">
        <Section>
          <div className="mx-auto max-w-2xl rounded-3xl border bg-card p-8 text-center shadow-card">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground"><Mail className="h-5 w-5" /></div>
            <h2 className="mt-4 text-2xl font-bold text-foreground">Get growth tactics every Sunday.</h2>
            <p className="mt-2 text-sm text-muted-foreground">One email. Real tactics. No fluff. Join 5,000+ founders and marketers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-5 flex max-w-md gap-2">
              <Input type="email" required placeholder="you@company.com" />
              <Button type="submit" className="bg-gradient-brand text-brand-foreground">Subscribe</Button>
            </form>
          </div>
        </Section>
      </section>
    </SiteLayout>
  );
}
