import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminShell } from "@/components/admin/AdminShell";
import { PostForm, type PostDraft } from "@/components/admin/PostForm";
import { ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/$id")({
  head: () => ({
    meta: [
      { title: "Edit Article — CliqRush Admin" },
      { name: "description", content: "Edit an existing CliqRush blog article." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Edit Article — CliqRush Admin" },
      { property: "og:description", content: "Edit an existing CliqRush blog article." },
    ],
  }),
  component: EditPost,
});

function EditPost() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-post", id],
    queryFn: async (): Promise<PostDraft> => {
      const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
      if (error) throw error;
      return {
        id: data.id,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "General",
        read_time: data.read_time ?? "5 min",
        cover_image_url: data.cover_image_url ?? "",
        content: data.content ?? "",
        featured: data.featured,
        status: data.status,
      };
    },
  });

  return (
    <AdminShell>
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        <ArrowLeft className="h-4 w-4" /> All articles
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Edit article</h1>
      {isLoading && (
        <div className="mt-10 flex items-center text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading article...
        </div>
      )}
      {error && <p className="mt-10 text-sm text-muted-foreground">This article couldn't be loaded.</p>}
      {data && (
        <div className="mt-8">
          <PostForm initial={data} />
        </div>
      )}
    </AdminShell>
  );
}
