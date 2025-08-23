import AboutContent from "@/components/About";
import Spotify from "@/components/About/Spotify";
import { Suspense } from "react";
import { Metadata } from "next";
import BorderWrapper from "@/components/common/BorderWrapper";
import Separator from "@/components/common/Separator";

export const metadata: Metadata = {
  title: "About",
  description: "About me, my work and the music I listen to",
};

const About = () => {
  return (
    <div className="flex flex-col font-sans">
      <Separator />
      <BorderWrapper padding="px-4" borderY="border-t">
        <h1 className="text-heading font-bold font-mono">About</h1>
      </BorderWrapper>
      <BorderWrapper>
        <AboutContent />
      </BorderWrapper>
      <Suspense
        fallback={
          <div>
            <Separator />
            <BorderWrapper borderY="border-t">
              Crunching the latest Spotify stats...
            </BorderWrapper>
          </div>
        }
      >
        <Separator />
        <Spotify />
      </Suspense>
    </div>
  );
};

export default About;
