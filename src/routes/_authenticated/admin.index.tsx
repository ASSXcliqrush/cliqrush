import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  head: () => ({
    meta: [
      { title: "Content Studio — CliqRush Admin" },
      { name: "description", content: "Create, edit and publish CliqRush blog articles." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Content Studio — CliqRush Admin" },
      { property: "og:description", content: "Create, edit and publish CliqRush blog articles." },
    ],
  }),
  component: AdminHome,
});

function AdminHome() {
  const qc = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, slug, title, category, status, featured, updated_at")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Article deleted.");
      qc.invalidateQueries({ queryKey: ["admin-posts"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <AdminShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Blog articles</h1>
          <p className="mt-1 text-sm text-muted-foreground">Write, edit and publish content for cliqrush.com/blog.</p>
        </div>
        <Button asChild className="rounded-full bg-gradient-brand text-brand-foreground">
          <Link to="/admin/new"><Plus className="mr-1.5 h-4 w-4" /> New article</Link>
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border bg-card shadow-card">
        {isLoading && (
          <div className="flex items-center justify-center p-12 text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading articles...
          </div>
        )}
        {error && <p className="p-8 text-sm text-muted-foreground">You may not have permission to manage posts yet.</p>}
        {data?.length === 0 && <p className="p-8 text-sm text-muted-foreground">No articles yet — create your first one.</p>}
        {data?.map((p) => (
          <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 border-b p-5 last:border-b-0">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    p.status === "published" ? "bg-brand/10 text-brand" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
                {p.featured && <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Featured</span>}
                <span className="text-xs text-muted-foreground">{p.category}</span>
              </div>
              <div className="mt-1 truncate font-semibold text-foreground">{p.title}</div>
              <div className="truncate text-xs text-muted-foreground">/blog/{p.slug}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/admin/$id" params={{ id: p.id }}><Pencil className="mr-1.5 h-3.5 w-3.5" /> Edit</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-destructive hover:text-destructive"
                onClick={() => {
                  if (confirm(`Delete "${p.title}"?`)) remove.mutate(p.id);
                }}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
