import ProjectCard from "@/components/Projects/ProjectCard";
import { getProjects } from "@/app/projects/utils";

const Project = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading font-bold font-mono">Projects</h1>
      <p className="text-body">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
