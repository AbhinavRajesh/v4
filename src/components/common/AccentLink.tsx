import Link from "next/link";

interface AccentLinkProps extends React.ComponentProps<typeof Link> {
  isExternal?: boolean;
}

const AccentLink = ({
  href,
  children,
  isExternal = false,
  ...props
}: AccentLinkProps) => {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className="text-accent font-medium hover:underline hover:text-accent/80 transition-all duration-150 ease-in-out underline-offset-4"
      {...props}
    >
      {children}
    </Link>
  );
};

export default AccentLink;
