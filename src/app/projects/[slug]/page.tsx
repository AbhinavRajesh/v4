import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/common/CustomMDX";
import { getProjects } from "@/app/projects/utils";
import BorderWrapper from "@/components/common/BorderWrapper";
import Separator from "@/components/common/Separator";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (await getProjects()).find(
    (project) => project.slug === slug
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (await getProjects()).find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="font-sans">
      <Separator />
      <BorderWrapper padding="px-4">
        <h1 className="font-semibold font-mono text-notes-h2 tracking-tighter">
          {project.mdxSource.frontmatter.title}
        </h1>
      </BorderWrapper>
      <BorderWrapper padding="px-4 py-1" borderY="">
        <div className="flex justify-between items-center text-sm ">
          <p className="text-body text-neutral-600 dark:text-neutral-400 font-sans">
            {project.mdxSource.frontmatter.tagline}
          </p>
        </div>
      </BorderWrapper>
      <BorderWrapper>
        <article
          className={`${styles.default} ${styles.anchor} prose-pre:bg-code-background`}
        >
          <CustomMDX source={project.mdxSource.content} />
        </article>
      </BorderWrapper>
    </section>
  );
}
