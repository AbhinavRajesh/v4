import { Rss } from "lucide-react";
import config from "@/lib/site-config";
import Socials from "@/components/ui/socials";
import ThemeToggle from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-subtle pt-6 text-xs text-muted">
      <span className="font-mono">
        © {new Date().getFullYear()} {config.userData.name}
      </span>
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
