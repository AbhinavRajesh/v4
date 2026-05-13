import { Suspense } from "react";
import { Metadata } from "next";
import AccentLink from "@/components/ui/accent-link";
import SpotifyMosaic from "@/features/spotify-mosaic/spotify-mosaic";
import config from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "About me, my work, and the music I listen to.",
};

const MosaicFallback = () => (
  <div className="space-y-4">
    <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
      Recently on repeat
    </h2>
    <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-square animate-pulse bg-subtle" />
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-xl font-medium">About</h1>
      </header>

      <section className="space-y-4">
        <p className="leading-7">
          I&apos;m a full-stack developer based in{" "}
          <span className="text-foreground">Kochi, Kerala</span>, currently
          working as a frontend developer at{" "}
          <AccentLink href="https://www.victoriassecret.com">
            Victoria&apos;s Secret & Co
          </AccentLink>
          . Before that I spent close to two years as a DevRel intern at{" "}
          <AccentLink href="https://github.com">GitHub</AccentLink>, designing
          and building the regional sites for India and Brazil — together
          serving more than 13 million developers.
        </p>
        <p className="leading-7">
          I studied Computer Science at the{" "}
          <AccentLink href="https://soe.cusat.ac.in">
            School of Engineering, CUSAT
          </AccentLink>
          . What started as a spark of curiosity in college turned into a
          full-blown obsession with the web — I love the loop of design,
          interaction, and code, and I think of frontend work as the craft of
          giving great design a life of its own.
        </p>
        <p className="leading-7">
          I work mostly on the frontend, but I&apos;m comfortable across the
          stack and enjoy reaching for whatever tool fits the problem. These
          days I&apos;m sharpening{" "}
          <span className="text-foreground">Go</span> on the side, playing with{" "}
          <span className="text-foreground">React Native</span> at work as part
          of the UFE initiative, and tinkering with small CLI utilities and
          tooling for projects of my own.
        </p>
        <p className="leading-7">
          Outside of work I write the occasional note on my{" "}
          <AccentLink href="/notes">blog</AccentLink>, build in the open on{" "}
          <AccentLink href={config.userData.social.github}>GitHub</AccentLink>,
          and post mostly half-formed thoughts on{" "}
          <AccentLink href={config.userData.social.twitter}>X</AccentLink>.
          Music is a constant companion while I work — there&apos;s a live
          snapshot below.
        </p>
        <p className="leading-7">
          If you&apos;re hiring, looking for a collaborator, or just want to
          chat about product, dev, or something in between — I&apos;d love to{" "}
          <AccentLink href={config.userData.social.email}>connect</AccentLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          A few things I care about
        </h2>
        <ul className="space-y-2 text-sm leading-6 text-muted">
          <li>
            <span className="text-foreground">Accessibility.</span> If it
            doesn&apos;t work for everyone, it doesn&apos;t work.
          </li>
          <li>
            <span className="text-foreground">Performance.</span> Slow UIs are
            disrespectful of someone else&apos;s time.
          </li>
          <li>
            <span className="text-foreground">Craft.</span> Polish the small
            things — they&apos;re what people actually feel.
          </li>
          <li>
            <span className="text-foreground">Building in the open.</span>{" "}
            Teaching forces me to understand a thing properly.
          </li>
        </ul>
      </section>

      <Suspense fallback={<MosaicFallback />}>
        <SpotifyMosaic />
      </Suspense>
    </div>
  );
};

export default About;
