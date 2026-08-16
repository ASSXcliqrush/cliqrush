import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PostBody } from "@/components/site/PostBody";
import { getPublishedPost } from "@/lib/blog.functions";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { post } = await getPublishedPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const url = `https://cliqrush.lovable.app/blog/${params.slug}`;
    const title = loaderData ? `${loaderData.post.title} | CliqRush` : "Article | CliqRush";
    const description = loaderData?.post.excerpt ?? "Growth marketing insights from CliqRush.";
    const image = loaderData?.post.cover_image_url;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(image
          ? [
              { property: "og:image", content: image },
              { name: "twitter:image", content: image },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: loaderData.post.title,
                description: loaderData.post.excerpt,
                datePublished: loaderData.post.published_at,
                author: { "@type": "Organization", name: "CliqRush" },
                mainEntityOfPage: url,
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
  errorComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">This article couldn't be loaded.</p>
      </Section>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Article not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-brand">Back to blog</Link>
        </div>
      </Section>
    </SiteLayout>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <article>
        <div className="relative overflow-hidden border-b bg-surface">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand">
              {post.category} · {post.read_time}
            </div>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            {post.published_at && (
              <div className="mt-4 text-sm text-muted-foreground">
                {new Date(post.published_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </div>
            )}
          </div>
        </div>

        {post.cover_image_url && (
          <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
            <img src={post.cover_image_url} alt={post.title} className="w-full rounded-3xl border object-cover shadow-card" />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <PostBody content={post.content} />
        </div>
      </article>
      <CTABand />
    </SiteLayout>
  );
}
