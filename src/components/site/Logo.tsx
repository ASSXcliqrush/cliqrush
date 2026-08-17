import logo from "@/assets/cliqrush-logo.asset.json";
import { Link } from "@tanstack/react-router";

const logoUrl = `https://cliqrush.lovable.app${logo.url}`;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="CliqRush home">
      <img src={logoUrl} alt="CliqRush" className="h-16 lg:h-30 w-auto" />
    </Link>
  );
}

