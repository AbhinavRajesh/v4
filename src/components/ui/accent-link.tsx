import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

const AccentLink = ({ href, children, className, showArrow }: Props) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(
    "text-accent underline underline-offset-4 transition-colors hover:no-underline",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {showArrow && (
          <ArrowUpRight className="inline h-3 w-3 -translate-y-px" />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default AccentLink;
