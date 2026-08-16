import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export type PostDraft = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  cover_image_url: string;
  content: string;
  featured: boolean;
  status: string;
};

export const emptyDraft: PostDraft = {
  slug: "",
  title: "",
  excerpt: "",
  category: "SEO",
  read_time: "6 min",
  cover_image_url: "",
  content: "",
  featured: false,
  status: "draft",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function PostForm({ initial }: { initial: PostDraft }) {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<PostDraft>(initial);
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof PostDraft>(key: K, value: PostDraft[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const save = async (status: "draft" | "published") => {
    if (!draft.title.trim()) {
      toast.error("Give the article a title first.");
      return;
    }
    setSaving(true);
    const slug = draft.slug.trim() ? slugify(draft.slug) : slugify(draft.title);
    const payload = {
      slug,
      title: draft.title.trim(),
      excerpt: draft.excerpt.trim(),
      category: draft.category.trim() || "General",
      read_time: draft.read_time.trim() || "5 min",
      cover_image_url: draft.cover_image_url.trim() || null,
      content: draft.content,
      featured: draft.featured,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = draft.id
      ? await supabase.from("posts").update(payload).eq("id", draft.id)
      : await supabase.from("posts").insert(payload);

    setSaving(false);
    if (error) {
      toast.error(error.message.includes("duplicate") ? "That URL slug is already used." : error.message);
      return;
    }
    toast.success(status === "published" ? "Article published." : "Draft saved.");
    navigate({ to: "/admin" });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-5 lg:col-span-2">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={draft.title} onChange={(e) => set("title", e.target.value)} className="mt-1.5" placeholder="How we tripled qualified leads in 90 days" />
        </div>
        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea id="excerpt" rows={3} value={draft.excerpt} onChange={(e) => set("excerpt", e.target.value)} className="mt-1.5" placeholder="One or two sentences that sell the click." />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <p className="mt-1 text-xs text-muted-foreground">Use blank lines between paragraphs. "## " starts a heading, "- " starts a bullet.</p>
          <Textarea id="content" rows={22} value={draft.content} onChange={(e) => set("content", e.target.value)} className="mt-1.5 font-mono text-sm" />
        </div>
      </div>

      <aside className="space-y-5 rounded-3xl border bg-card p-6 shadow-card lg:sticky lg:top-6 lg:h-fit">
        <div>
          <Label htmlFor="slug">URL slug</Label>
          <Input id="slug" value={draft.slug} onChange={(e) => set("slug", e.target.value)} className="mt-1.5" placeholder="auto from title" />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input id="category" value={draft.category} onChange={(e) => set("category", e.target.value)} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="read_time">Read time</Label>
          <Input id="read_time" value={draft.read_time} onChange={(e) => set("read_time", e.target.value)} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="cover">Cover image URL</Label>
          <Input id="cover" value={draft.cover_image_url} onChange={(e) => set("cover_image_url", e.target.value)} className="mt-1.5" placeholder="https://..." />
        </div>
        <div className="flex items-center justify-between rounded-2xl border p-3">
          <div>
            <div className="text-sm font-semibold text-foreground">Featured</div>
            <div className="text-xs text-muted-foreground">Show at the top of the blog</div>
          </div>
          <Switch checked={draft.featured} onCheckedChange={(v) => set("featured", v)} />
        </div>

        <div className="space-y-2 pt-2">
          <Button disabled={saving} onClick={() => save("published")} className="w-full rounded-full bg-gradient-brand text-brand-foreground">
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Publish
          </Button>
          <Button disabled={saving} variant="outline" onClick={() => save("draft")} className="w-full rounded-full">
            Save as draft
          </Button>
        </div>
      </aside>
    </div>
  );
}
