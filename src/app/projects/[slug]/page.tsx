import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { Mdx } from "@/components/mdx";
import { getProjects } from "@/app/projects/utils";
import AccentLink from "@/components/accent-link";

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

  const { title, tagline, github_repo } = project.mdxSource.frontmatter;

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
        {tagline && <p className="text-sm text-muted">{tagline}</p>}
        {github_repo && (
          <p className="font-mono text-xs">
            <AccentLink href={`https://github.com/${github_repo}`}>
              github.com/{github_repo}
            </AccentLink>
          </p>
        )}
      </header>
      <div className="text-foreground">
        <Mdx source={project.mdxSource.content} />
      </div>
    </article>
  );
};

export default Project;
