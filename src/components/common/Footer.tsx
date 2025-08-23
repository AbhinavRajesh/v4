import config from "@/utils/config";
import AccentLink from "./AccentLink";
import BorderWrapper from "./BorderWrapper";
import Separator from "./Separator";
import Socials from "./CustomMDX/Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="pb-2">
      <Separator />
      <BorderWrapper>
        <div className="flex justify-between items-start font-sans">
          <div className="flex flex-col gap-2">
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
          <Socials hideText />
        </div>
      </BorderWrapper>
    </div>
  );
};

export default Footer;
