"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const getLabel = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary transition">
        <Home className="h-4 w-4" />
      </Link>
      {segments.map((segment, index) => (
        <div key={segment} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4" />
          {index === segments.length - 1 ? (
            <span className="text-foreground font-medium">{getLabel(segment)}</span>
          ) : (
            <Link
              href={`/${segments.slice(0, index + 1).join("/")}`}
              className="hover:text-primary transition"
            >
              {getLabel(segment)}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
