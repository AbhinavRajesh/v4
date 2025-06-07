import AccentLink from "../common/AccentLink";

interface WorkList {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
  technologies: string[];
  link: string;
}

const workList: WorkList[] = [
  {
    title: "Frontend Developer",
    company: "Victoria's Secret & Co.",
    location: "Bangalore, India (Full-time | Remote)",
    startDate: "June 2023",
    endDate: "Present",
    description: (
      <ul className="gap-2 list-disc list-outside pl-4 text-md">
        <li>
          Enhanced the accessibility of the main Victoria&apos;s Secret website,
          leading to a{" "}
          <span className="font-semibold">10% increase in retention</span> among
          users with disabilities.
        </li>
        <li>
          Implemented the &quot;Keep me signed in&quot; feature, resulting in a{" "}
          <span className="font-semibold">$13.6 million</span> annualized impact
        </li>
        <li>
          Integrated an OTP-based authentication system, resulting in a{" "}
          <span className="font-semibold">$12.6 million</span> impact, a{" "}
          <span className="font-semibold">27% increase in sign-ins</span>, an{" "}
          <span className="font-semibold">
            84% reduction in forgot password support requests
          </span>
          , approximately{" "}
          <span className="font-semibold">4x more account creations</span>, and
          over{" "}
          <span className="font-semibold">
            50% of users preferring OTP over passwords.
          </span>
        </li>
      </ul>
    ),
    technologies: ["React", "JavaScript", "Jest", "Git", "JSDoc"],
    link: "https://www.victoriassecret.com",
  },
  {
    title: "Consultant",
    company: "GitHub",
    location: "Bangalore, India (Freelance | Remote)",
    startDate: "January 2024",
    endDate: "October 2024",
    description: (
      <ul className="gap-2 list-disc list-outside pl-4 text-md">
        <li>
          Led the design and development of the GitHub Constellation India 2024
          website (
          <AccentLink href="https://githubconstellation.com" isExternal>
            githubconstellation.com
          </AccentLink>
          ), supporting{" "}
          <span className="font-semibold">
            India&apos;s largest open-source developer conference, where GitHub
            CEO Thomas Dohmke delivered the keynote.
          </span>
        </li>
        <li>
          Built a dynamic Open Graph image generation module for the event
          website.
        </li>
        <li>
          Structured the site as a reusable template to streamline future GitHub
          Constellation events(GitHub Constellation South Africa 2024).
        </li>
      </ul>
    ),
    technologies: [
      "React",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Figma",
      "Git",
      "GitHub Actions",
      "GitHub Pages",
    ],
    link: "https://github.com",
  },
  {
    title: "DevRel Engineer",
    company: "GitHub",
    location: "Bangalore, India (Internship | Remote)",
    startDate: "February 2022",
    endDate: "June 2023",
    description: (
      <ul className="gap-2 list-disc list-outside pl-4 text-md">
        <li>
          Designed and developed the entire websites for GitHub India (
          <AccentLink href="https://githubindia.com" isExternal>
            githubindia.com
          </AccentLink>
          ) and GitHub Brasil (
          <AccentLink href="https://githubbrasil.com" isExternal>
            githubbrasil.com
          </AccentLink>
          ), serving as key hubs for over{" "}
          <span className="font-semibold">10 million</span> developers in India
          and <span className="font-semibold">3 million+</span> developers in
          Brazil, respectively, to access GitHub&apos;s activities and
          resources.
        </li>
        <li>
          Built a Slack bot for URL shortening and developed internal tools that
          streamlined operations—reducing manual tasks for Hubbers by
          approximately 5%.
        </li>
      </ul>
    ),
    technologies: [
      "React",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Primer Style",
      "Jekyll",
      "Ruby",
      "Rspec",
      "Jest",
      "Figma",
      "Azure",
      "Git",
      "GitHub API",
      "GitHub Actions",
    ],
    link: "https://github.com",
  },
  {
    title: "Software Engineer",
    company: "GrowthCX",
    location: "Bangalore, India (Internship | Remote)",
    startDate: "March 2021",
    endDate: "January 2022",
    description: (
      <ul className="gap-2 list-disc list-outside pl-4 text-md">
        <li>
          Responsible for creating the whole frontend of their latest SaaS
          product <AccentLink href="https://suitejar.com">SuiteJar</AccentLink>{" "}
          from a design.
        </li>
        <li>
          Converted multiple web pages to WordPress websites, resulting in a{" "}
          <span className="font-semibold">
            25% increase in website manageability
          </span>{" "}
          and a <span className="font-semibold">20% reduction</span> in
          maintenance costs for GrowthCX and its clients.
        </li>
      </ul>
    ),
    technologies: [
      "React",
      "Ant Design",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Wordpress",
      "NodeJS",
      "Git",
    ],
    link: "https://github.com",
  },
];

const Work = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 font-sans">
      <h2 className="text-heading font-bold">Work</h2>
      <p className="text-body text-secondary">
        Checkout my <AccentLink href="/resume">resume</AccentLink>
      </p>
      <div className="flex flex-col gap-4">
        {workList.map((work) => (
          <div key={work.title} className="flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold">
                {work.title} —{" "}
                <AccentLink href={work.link}>{work.company}</AccentLink>
              </h3>
              <p className="text-sm text-secondary">
                {work.startDate} — {work.endDate}
              </p>
            </div>
            <p className="text-sm text-secondary">{work.location}</p>
            <div className="mt-2">{work.description}</div>
            <p className="text-sm text-secondary mt-2">
              {work.technologies.join(" | ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
