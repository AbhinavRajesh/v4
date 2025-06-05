import { getProjects } from "@/app/projects/utils";
import Link from "next/link";

export type ProjectType = Awaited<ReturnType<typeof getProjects>>[number];

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col justify-between gap-2 hover:bg-foreground/3 transition-all duration-300 p-4 rounded-md"
    >
      <div className="flex flex-col gap-2">
        <div className="relative h-48 w-full overflow-hidden rounded-md flex items-center justify-center text-center text-background bg-foreground font-sans font-medium text-lg">
          <img
            src={project.mdxSource.frontmatter.image}
            alt={project.mdxSource.frontmatter.title}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-bold">
          {project.mdxSource.frontmatter.title}
        </h3>
        <p className="text-sm text-foreground">
          {project.mdxSource.frontmatter.description}
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <p className="text-sm text-secondary">
          {project.mdxSource.frontmatter.highlight}
        </p>
        <p className="text-xs text-secondary">
          {project.mdxSource.frontmatter.tags.join(" | ")}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
