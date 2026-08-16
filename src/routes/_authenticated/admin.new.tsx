import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { PostForm, emptyDraft } from "@/components/admin/PostForm";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/new")({
  head: () => ({
    meta: [
      { title: "New Article — CliqRush Admin" },
      { name: "description", content: "Write and publish a new CliqRush blog article." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "New Article — CliqRush Admin" },
      { property: "og:description", content: "Write and publish a new CliqRush blog article." },
    ],
  }),
  component: NewPost,
});

function NewPost() {
  return (
    <AdminShell>
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        <ArrowLeft className="h-4 w-4" /> All articles
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">New article</h1>
      <div className="mt-8">
        <PostForm initial={emptyDraft} />
      </div>
    </AdminShell>
  );
}
