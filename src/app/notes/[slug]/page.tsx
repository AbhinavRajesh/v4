import { notFound } from "next/navigation";
import { getNotes } from "@/app/notes/utils";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/common/CustomMDX";
import { formatDate } from "@/utils";

export async function generateStaticParams() {
  const posts = await getNotes();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getNotes()).find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.mdxSource.frontmatter;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/notes/${post.slug}`,
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

export default async function Notes({ params }: { params: { slug: string } }) {
  let post = (await getNotes()).find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="font-sans">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.mdxSource.frontmatter.title,
            datePublished: post.mdxSource.frontmatter.publishedAt,
            dateModified: post.mdxSource.frontmatter.publishedAt,
            description: post.mdxSource.frontmatter.summary,
            image: post.mdxSource.frontmatter.image
              ? `${baseUrl}${post.mdxSource.frontmatter.image}`
              : `/og?title=${encodeURIComponent(
                  post.mdxSource.frontmatter.title
                )}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Abhinav Rajesh",
            },
          }),
        }}
      />
      <h1 className="font-semibold font-mono text-notes-h2 tracking-tighter">
        {post.mdxSource.frontmatter.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm ">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
          {formatDate(post.mdxSource.frontmatter.publishedAt)}
        </p>
      </div>
      <article
        className={`${styles.default} ${styles.anchor} prose-pre:bg-code-background`}
      >
        <CustomMDX source={post.mdxSource.content} />
      </article>
    </section>
  );
}
