import config from "@/utils/config";
import AccentLink from "@/components/common/AccentLink";
import Socials from "@/components/common/CustomMDX/Socials";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading font-mono">{config.userData.name}</h1>
      <p className="text-body">
        Building fast, accessible web experiences—front to back
      </p>
      <p className="text-body">
        Currently working at{" "}
        <AccentLink href="https://www.victoriassecret.com" isExternal>
          Victoria&apos;s Secret & Co
        </AccentLink>{" "}
        as a Frontend Developer. Previously collaborated with{" "}
        <AccentLink href="https://github.com" isExternal>
          GitHub
        </AccentLink>{" "}
        on high-impact projects serving millions of developers.
      </p>
      <p className="text-body">
        If you&apos;re hiring, looking for a collaborator, or just want to chat
        about product, dev, or something in between—I&apos;d love to connect.
      </p>
      <Socials />
    </div>
  );
};

export default Hero;
