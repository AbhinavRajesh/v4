import { notFound } from "next/navigation";
import { getNotes } from "@/app/notes/utils";
import { baseUrl } from "@/app/sitemap";
import { Mdx } from "@/components/mdx";
import { formatDate } from "@/utils";

export async function generateStaticParams() {
  const posts = await getNotes();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await getNotes()).find((p) => p.slug === slug);
  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.mdxSource.frontmatter;
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
      publishedTime,
      url: `${baseUrl}/notes/${post.slug}`,
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

const Note = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = (await getNotes()).find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
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
            url: `${baseUrl}/notes/${post.slug}`,
            author: { "@type": "Person", name: "Abhinav Rajesh" },
          }),
        }}
      />
      <header className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">
          {post.mdxSource.frontmatter.title}
        </h1>
        <p className="font-mono text-xs text-muted">
          {formatDate(post.mdxSource.frontmatter.publishedAt)}
        </p>
      </header>
      <div className="text-foreground">
        <Mdx source={post.mdxSource.content} />
      </div>
    </article>
  );
};

export default Note;
