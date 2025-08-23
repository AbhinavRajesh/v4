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
    <div className="pt-2 sticky inset-0 top-0 z-50 bg-background px-2">
      <div className="border-y border-edge">
        <header className="flex justify-between items-center max-w-2xl mx-auto border-x border-edge px-4">
          <div className="flex h-full">
            <nav className="flex gap-4 font-mono text-secondary h-full">
              <NavLink href="/">~/</NavLink>
              <NavLink href="/about">~/about</NavLink>
              <NavLink href="/projects">~/projects</NavLink>
              <NavLink href="/notes">~/notes</NavLink>
            </nav>
          </div>
          <div className="border-l border-edge pl-4">
            <Logo href="/" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
