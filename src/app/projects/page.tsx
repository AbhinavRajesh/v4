import ProjectCard from "@/components/Projects/ProjectCard";
import { getProjects } from "@/app/projects/utils";
import { Metadata } from "next";
import BorderWrapper from "@/components/common/BorderWrapper";
import Separator from "@/components/common/Separator";

export const metadata: Metadata = {
  title: "Projects",
  description: "My personal projects",
};

const Project = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col font-sans">
      <Separator />
      <BorderWrapper padding="px-4" borderY="border-t">
        <h1 className="text-heading font-bold font-mono">Projects</h1>
      </BorderWrapper>
      <BorderWrapper padding="px-4 py-1">
        <p className="text-body">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </BorderWrapper>
      <BorderWrapper padding="" borderY="border-b">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </BorderWrapper>
    </div>
  );
};

export default Project;
