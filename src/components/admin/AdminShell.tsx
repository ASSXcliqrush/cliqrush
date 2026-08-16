import { Link, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { LogOut, ExternalLink } from "lucide-react";

export function AdminShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link to="/admin" className="flex items-center gap-3">
            <Logo className="h-12" />
            <span className="hidden text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:block">
              Content Studio
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog">
                View blog <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={async () => {
                await supabase.auth.signOut();
                navigate({ to: "/auth" });
              }}
            >
              <LogOut className="mr-1.5 h-3.5 w-3.5" /> Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
