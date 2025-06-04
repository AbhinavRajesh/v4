import AboutContent from "@/components/About";

export default function About() {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading font-bold font-mono">About</h1>
      <AboutContent />
    </div>
  );
}
