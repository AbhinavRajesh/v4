import config from "@/confg";
import AccentLink from "../common/AccentLink";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body">
        I&apos;m a{" "}
        <span className="text-accent font-medium">full-stack developer</span>{" "}
        based in India, currently working as a frontend developer at{" "}
        <AccentLink href="https://www.victoriassecret.com" isExternal>
          @Victoria&apos;s Secret & Co
        </AccentLink>
        . I enjoy building fast, accessible, and user-friendly web
        experiences—clean UIs backed by solid code.
      </p>
      <p className="text-body font-sans">
        What started as a spark of curiosity in web development quickly turned
        into a full-blown passion. These days, I love working across the
        stack—whether it&apos;s building out polished frontends or wiring up
        APIs and backend logic. I&apos;m always up for tackling interesting
        problems and shipping things that people actually enjoy using.
      </p>
      <p className="text-body font-sans">
        I studied Computer Science at the{" "}
        <AccentLink href="https://soe.cusat.ac.in" isExternal>
          School of Engineering, CUSAT
        </AccentLink>
        , and since then I&apos;ve worked with both startups and enterprise
        teams—turning ideas into products, and collaborating with folks who care
        about craft. I also occasionally write about tech on my{" "}
        <AccentLink href={config.userData.social.website} isExternal>
          blog↗
        </AccentLink>
        , and share what I&apos;m building on{" "}
        <AccentLink href={config.userData.social.twitter} isExternal>
          X
        </AccentLink>{" "}
        and{" "}
        <AccentLink href={config.userData.social.github} isExternal>
          GitHub
        </AccentLink>
        .
      </p>
    </div>
  );
};

export default About;
