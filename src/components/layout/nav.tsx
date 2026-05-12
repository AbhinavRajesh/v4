"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/notes", label: "notes" },
  { href: "/projects", label: "projects" },
];

const Nav = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="flex gap-5 font-mono text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "transition-colors hover:text-foreground",
            isActive(link.href) ? "text-foreground" : "text-muted",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
