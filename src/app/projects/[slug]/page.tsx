import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { getProjects } from "@/content";
import ContentPage from "@/features/mdx/content-page";
import ProjectHeader from "@/features/mdx/project-header";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (await getProjects()).find((p) => p.slug === slug);
  if (!project) return;

  const { title, description, image } = project.mdxSource.frontmatter;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/projects/${project.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const Project = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = (await getProjects()).find((p) => p.slug === slug);
  if (!project) notFound();

  const { title, tagline, github_repo, live_url } =
    project.mdxSource.frontmatter;

  return (
    <ContentPage
      header={
        <ProjectHeader
          title={title}
          tagline={tagline}
          github_repo={github_repo}
          live_url={live_url}
        />
      }
      source={project.mdxSource.content}
    />
  );
};

export default Project;
