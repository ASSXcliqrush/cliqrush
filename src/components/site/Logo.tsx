import logo from "@/assets/cliqrush-logo.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="CliqRush home">
      <img src={logo.url} alt="CliqRush" className="h-11 w-auto" />
    </Link>
  );
}

