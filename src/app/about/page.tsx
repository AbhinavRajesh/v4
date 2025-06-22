import AboutContent from "@/components/About";
import Spotify from "@/components/About/Spotify";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me, my work and the music I listen to",
};

const About = () => {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading font-bold font-mono">About</h1>
      <AboutContent />
      <Suspense fallback={<div>Crunching the latest Spotify stats...</div>}>
        <Spotify />
      </Suspense>
    </div>
  );
};

export default About;
