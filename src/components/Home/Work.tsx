import AccentLink from "@/components/common/AccentLink";
import BorderWrapper from "@/components/common/BorderWrapper";

interface WorkList {
  title: string;
  company: string;
  companyLogo?: string;
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
    companyLogo: "/assets/logos/vs.png",
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
        <li>
          <span className="font-semibold">Core contributor</span> to the
          architecture team responsible for migrating analytics from Tealium
          utag to an{" "}
          <span className="font-semibold">Event-Driven Data Layer (EDDL)</span>,
          contributing to an estimated{" "}
          <span className="font-semibold">$70K annual cost savings</span> by
          reducing reliance on third-party tools and improving event tracking
          reliability.
        </li>
        <li>
          <span className="font-semibold">
            Supported the onboarding of frontend developers
          </span>{" "}
          to the new EDDL approach through documentation, code reviews, and
          hands-on mentoring.
        </li>
        <li>
          Currently assisting in the migration of the codebase from React 16 to
          React 18.
        </li>
      </ul>
    ),
    technologies: ["React", "JavaScript", "Jest", "Git", "JSDoc"],
    link: "https://www.victoriassecret.com",
  },
  {
    title: "Consultant",
    company: "GitHub",
    companyLogo: "/assets/logos/github.png",
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
    companyLogo: "/assets/logos/github.png",
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
    companyLogo: "/assets/logos/growth-cx.jpg",
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
    <div className="flex flex-col font-sans">
      <BorderWrapper padding="px-4">
        <h2 className="text-heading font-bold">Work</h2>
      </BorderWrapper>
      <BorderWrapper padding="px-4" borderY="">
        <p className="text-body text-secondary">
          Checkout my{" "}
          <AccentLink
            href="https://drive.google.com/file/d/1cYyG-tjDqpmwyxzEJaD1EEfPM1DHXAXn/view?usp=sharing"
            isExternal
          >
            resume
          </AccentLink>
        </p>
      </BorderWrapper>
      <div className="flex flex-col">
        {workList.map((work, index) => (
          <BorderWrapper
            key={work.title}
            borderY={index === workList.length - 1 ? "border-y" : "border-t"}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="bg-white w-8 md:w-12 h-8 md:h-12 rounded-sm aspect-square overflow-hidden p-1 border border-edge">
                  <img
                    src={work.companyLogo}
                    alt={`${work.company} logo`}
                    height={48}
                    width={48}
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-5">{work.title}</h3>
                  <AccentLink
                    className="text-lg leading-5 block font-bold"
                    href={work.link}
                  >
                    {work.company}
                  </AccentLink>
                  <div className="flex flex-col md:flex-row md:gap-2">
                    <p className="text-sm text-secondary">{work.location}</p>
                    <span className="hidden md:block text-sm text-secondary">
                      |
                    </span>
                    <p className="text-sm text-secondary">
                      {work.startDate} — {work.endDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">{work.description}</div>
              <p className="text-sm text-secondary mt-2">
                {work.technologies.join(" | ")}
              </p>
            </div>
          </BorderWrapper>
        ))}
      </div>
    </div>
  );
};

export default Work;
