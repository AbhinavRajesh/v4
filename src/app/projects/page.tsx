import Link from "next/link";
import { Metadata } from "next";
import { getProjects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects.",
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-xl font-medium">Projects</h1>
        <p className="text-sm text-muted">
          Things I&apos;ve built outside of work.
        </p>
      </header>

      <ul className="divide-y divide-subtle">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-1 py-4"
            >
              <span className="text-foreground transition-colors group-hover:text-accent">
                {project.mdxSource.frontmatter.title}
              </span>
              <span className="text-sm text-muted">
                {project.mdxSource.frontmatter.tagline ||
                  project.mdxSource.frontmatter.short_description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
