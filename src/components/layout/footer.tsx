import { Rss } from "lucide-react";
import config from "@/lib/site-config";
import Socials from "@/components/ui/socials";
import ThemeToggle from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-y-3 border-t border-subtle pt-6 text-xs text-muted">
      <div className="flex items-center gap-3 font-mono">
        <span>
          © {new Date().getFullYear()} {config.userData.name}
        </span>
        <span className="text-subtle">·</span>
        <a
          href={config.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          source
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Socials />
        <a
          href="/rss.xml"
          aria-label="RSS feed"
          className="text-muted transition-colors hover:text-foreground"
        >
          <Rss className="h-4 w-4" />
        </a>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
