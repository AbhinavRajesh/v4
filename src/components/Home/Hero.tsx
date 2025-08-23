import config from "@/utils/config";
import AccentLink from "@/components/common/AccentLink";
import Socials from "@/components/common/CustomMDX/Socials";
import BorderWrapper from "@/components/common/BorderWrapper";
import Separator from "@/components/common/Separator";

const Hero = () => {
  return (
    <div className="flex flex-col font-sans">
      <BorderWrapper padding="">
        <div className="flex">
          <div className="border-r border-edge">
            <img
              src="/assets/dp.jpeg"
              alt="A picture of meee"
              fetchPriority="high"
              className="size-32 sm:size-40 rounded-full p-1 border border-edge"
            />
          </div>
          <div className="flex flex-col justify-end flex-1">
            <div className="flex grow items-end pb-1 pl-4 bg-[repeating-linear-gradient(45deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56" />
            <h1 className="text-3xl font-bold md:text-heading font-mono px-4 border-t border-edge">
              {config.userData.name}
            </h1>
            <p className="text-sm md:text-body border-t border-edge px-4 py-1">
              Building fast, accessible web experiences—front to back
            </p>
          </div>
        </div>
      </BorderWrapper>
      <Separator />
      <BorderWrapper>
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
          If you&apos;re hiring, looking for a collaborator, or just want to
          chat about product, dev, or something in between—I&apos;d love to
          connect.
        </p>
        <Socials />
      </BorderWrapper>
    </div>
  );
};

export default Hero;
