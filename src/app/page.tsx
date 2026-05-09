import AccentLink from "@/components/accent-link";
import WorkList, { type WorkEntry } from "@/components/work-list";
import config from "@/utils/config";

const work: WorkEntry[] = [
  {
    company: "?",
    role: "Software Engineer II",
    period: "May 2026 — Present",
    tags: ["Full-time", "Hybrid"],
    summary: <>Joining a new team as a fullstack engineer.</>,
  },
  {
    company: "Victoria's Secret & Co.",
    role: "Frontend Developer",
    period: "Jun 2023 — May 2026",
    companyUrl: "https://www.victoriassecret.com",
    tags: ["Full-time", "Remote"],
    summary: (
      <>
        Shipped accessibility, auth, and analytics across the Victoria&apos;s
        Secret storefront. Most recently a core contributor on the architecture
        team for the UFE (Unified Frontend Experience) initiative.
      </>
    ),
    bullets: [
      <>
        Enhanced accessibility of the main VS website —{" "}
        <span className="text-foreground">10% increase in retention</span> among
        users with disabilities.
      </>,
      <>
        Implemented &quot;Keep me signed in&quot; —{" "}
        <span className="text-foreground">$13.6M annualized impact</span>.
      </>,
      <>
        Integrated OTP-based auth —{" "}
        <span className="text-foreground">$12.6M impact</span>, 27% more
        sign-ins, 84% reduction in forgot-password support, ~4× more account
        creations, and 50%+ users preferring OTP over passwords.
      </>,
      <>
        Core contributor to the architecture team migrating analytics from
        Tealium utag to an{" "}
        <span className="text-foreground">Event-Driven Data Layer (EDDL)</span>{" "}
        — ~$70K annual savings.
      </>,
      <>
        Supported onboarding of frontend devs to EDDL via documentation, code
        reviews, and mentoring.
      </>,
      <>Contributed to the team-wide React 16 → 18 migration.</>,
      <>
        Core contributor on the <span className="text-foreground">UFE</span>{" "}
        initiative — migrating the codebase from React to React Native to share
        a single codebase across web and app.
      </>,
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "NativeWind",
      "GluestackUI",
      "Jest",
    ],
  },
  {
    company: "GitHub",
    role: "Consultant",
    period: "Feb 2026 — Apr 2026",
    companyUrl: "https://github.com",
    tags: ["Freelance", "Remote"],
    summary: (
      <>
        Migrated the{" "}
        <AccentLink href="https://githubuniverse.com">
          GitHub Universe 2025
        </AccentLink>{" "}
        codebase to build the{" "}
        <AccentLink href="https://githubconstellation.com">
          GitHub Constellation India 2026
        </AccentLink>{" "}
        site — a one-day developer event featuring{" "}
        <span className="text-foreground">
          Jay Parikh (EVP, Core AI at Microsoft)
        </span>{" "}
        and <span className="text-foreground">Kyle Daigle (COO, GitHub)</span>.
      </>
    ),
    bullets: [
      <>
        Designed and built session listing, session detail, and registration
        pages.
      </>,
      <>Designed Open Graph images for sessions in Figma.</>,
      <>Added embedded YouTube live keynote streaming support.</>,
      <>
        Ensured accessibility compliance and optimized image assets for
        performance.
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Primer",
      "GSAP",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    company: "GitHub",
    role: "Consultant",
    period: "Jan 2024 — Oct 2024",
    companyUrl: "https://github.com",
    tags: ["Freelance", "Remote"],
    summary: (
      <>
        Led the design and development of{" "}
        <AccentLink href="https://githubconstellation.com">
          GitHub Constellation India 2024
        </AccentLink>{" "}
        — India&apos;s largest open-source developer conference, with a keynote
        by <span className="text-foreground">GitHub CEO Thomas Dohmke</span>.
      </>
    ),
    bullets: [
      <>Built a dynamic Open Graph image generation module for the site.</>,
      <>
        Structured the site as a reusable template, used for{" "}
        <span className="text-foreground">Constellation South Africa 2024</span>
        .
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    company: "GitHub",
    role: "DevRel Engineer",
    period: "Feb 2022 — Jun 2023",
    companyUrl: "https://github.com",
    tags: ["Internship", "Remote"],
    summary: (
      <>
        Designed and built{" "}
        <AccentLink href="https://githubindia.com">githubindia.com</AccentLink>{" "}
        and{" "}
        <AccentLink href="https://githubbrasil.com">
          githubbrasil.com
        </AccentLink>
        , serving as key hubs for{" "}
        <span className="text-foreground">10M+ developers in India</span> and{" "}
        <span className="text-foreground">3M+ in Brazil</span>.
      </>
    ),
    bullets: [
      <>
        Single-handedly designed and developed both regional sites end-to-end.
      </>,
      <>
        Built a Slack bot for URL shortening and other internal tools that
        reduced manual work for Hubbers by ~5%.
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Primer",
      "Jekyll",
      "Ruby",
      "Azure",
      "GitHub API",
    ],
  },
  {
    company: "GrowthCX",
    role: "Software Engineer",
    period: "Mar 2021 — Jan 2022",
    companyUrl: "https://growthcx.com",
    tags: ["Internship", "Remote"],
    summary: (
      <>
        Built the entire frontend of{" "}
        <AccentLink href="https://suitejar.com">SuiteJar</AccentLink> from a
        design, plus marketing and client sites.
      </>
    ),
    bullets: [
      <>Created the full SuiteJar frontend from design to production.</>,
      <>
        Migrated multiple pages to WordPress —{" "}
        <span className="text-foreground">25% increase in manageability</span>{" "}
        and <span className="text-foreground">20% reduction</span> in
        maintenance costs for GrowthCX and clients.
      </>,
    ],
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Ant Design",
      "WordPress",
      "Node.js",
    ],
  },
];

const education = [
  {
    title: "B.Tech, Computer Science & Engineering",
    school: "School of Engineering, CUSAT",
    period: "2019 — 2023",
    score: "9.05 GPA / 10",
  },
  {
    title: "Higher Secondary, Computer Science (AISSCE)",
    school: "Saraswathi Vidyaniketan",
    period: "2017 — 2019",
    score: "88.8%",
  },
];

const stack = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Go",
];

const Home = () => {
  return (
    <div className="space-y-14">
      <header className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-xl font-medium">{config.userData.name}</h1>
          <span className="font-mono text-xs text-muted">Kochi, IN</span>
        </div>
        <p className="leading-7 text-foreground">
          Software engineer based in India, most recently at{" "}
          <AccentLink href="https://www.victoriassecret.com">
            Victoria&apos;s Secret & Co
          </AccentLink>
          . Previously consulted for{" "}
          <AccentLink href="https://github.com">GitHub</AccentLink> on projects
          serving millions of developers. I care about fast, accessible web
          experiences — clean UIs backed by solid code.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="animate-status-pulse mr-1.5 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-emerald-500 align-middle" />
          available for freelance & consulting
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Experience
        </h2>
        <p className="text-sm text-muted">
          Tap a row to expand. Tap the company name to visit their site.{" "}
          <AccentLink href="https://drive.google.com/file/d/1JfuaeO1OjC9YX4PWDryFwZJrrZIPBaaO/view?usp=sharing">
            Resume
          </AccentLink>
          .
        </p>
        <WorkList entries={work} />
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Education
        </h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.title} className="space-y-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-foreground">{e.title}</span>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted">
                {e.school} · <span className="text-foreground">{e.score}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Stack
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted">
          {stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < stack.length - 1 && (
                <span className="ml-2 text-subtle">·</span>
              )}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
