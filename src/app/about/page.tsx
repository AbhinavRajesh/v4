import AboutContent from "@/components/About";
import Spotify from "@/components/About/Spotify";
import { Suspense } from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading font-bold font-mono">About</h1>
      <AboutContent />
      <Suspense fallback={<div>Crunching the spotify data...</div>}>
        <Spotify />
      </Suspense>
    </div>
  );
};

export default About;
