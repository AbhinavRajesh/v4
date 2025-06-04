"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  isExternal = false,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-foreground hover:underline transition-all duration-150 ease-in-out ${
        isActive ? "text-foreground" : "text-secondary"
      }`}
      target={isExternal ? "_blank" : undefined}
    >
      {children} {isExternal && "↗"}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <nav className="flex gap-4 font-mono text-secondary">
        <NavLink href="/">~/</NavLink>
        <NavLink href="/about">~/about</NavLink>
        <NavLink href="/projects">~/projects</NavLink>
        <NavLink href="/notes">~/notes</NavLink>
        <NavLink href="https://blog.abhinavrajesh.com" isExternal>
          ~/blog
        </NavLink>
      </nav>
      <Logo href="/" />
    </header>
  );
};

export default Header;
