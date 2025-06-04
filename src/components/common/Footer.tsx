import config from "@/confg";
import AccentLink from "./AccentLink";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="pt-8">
      <hr className="border-t border-secondary/20" />
      <div className="flex justify-between items-center font-sans py-4">
        <p className="text-sm text-secondary">
          &#169; {year} {config.userData.name}
        </p>
        <AccentLink
          className="text-secondary text-sm"
          href="https://github.com/AbhinavRajesh/v4"
        >
          Source Code
        </AccentLink>
      </div>
    </div>
  );
};

export default Footer;
