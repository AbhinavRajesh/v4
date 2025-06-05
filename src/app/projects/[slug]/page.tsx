import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/common/CustomMDX";
import { getProjects } from "@/app/projects/utils";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = (await getProjects()).find(
    (project) => project.slug === params.slug
  );

  if (!project) {
    return;
  }

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
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const styles = {
  default: "prose dark:prose-invert font-sans prose-pre:leading-none",
  anchor:
    "prose-a:text-accent prose-a:font-semibold prose-a:dark:font-medium prose-a:underline prose-a:hover:text-accent/80 prose-a:transition-all prose-a:duration-150 prose-a:ease-in-out prose-a:underline-offset-4",
};

export default async function Projects({
  params,
}: {
  params: { slug: string };
}) {
  const project = (await getProjects()).find(
    (project) => project.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="font-sans">
      <h1 className="font-semibold font-mono text-notes-h2 tracking-tighter">
        {project.mdxSource.frontmatter.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm ">
        <p className="text-body text-neutral-600 dark:text-neutral-400 font-sans">
          {project.mdxSource.frontmatter.tagline}
        </p>
      </div>
      <article
        className={`${styles.default} ${styles.anchor} prose-pre:bg-code-background`}
      >
        <CustomMDX source={project.mdxSource.content} />
      </article>
    </section>
  );
}
