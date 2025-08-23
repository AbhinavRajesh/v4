import Separator from "@/components/common/Separator";
import Education from "@/components/Home/Education";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <Separator />
      <Work />
      <Separator />
      <Education />
    </>
  );
};

export default Home;
