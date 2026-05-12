import config from "@/utils/config";
import Socials from "@/components/ui/socials";
import ThemeToggle from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-subtle pt-6 text-xs text-muted">
      <span className="font-mono">
        © {new Date().getFullYear()} {config.userData.name}
      </span>
      <div className="flex items-center gap-5">
        <Socials />
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
