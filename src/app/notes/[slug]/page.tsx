import { notFound } from "next/navigation";
import { getNotes } from "@/content";
import { baseUrl } from "@/app/sitemap";
import ContentPage from "@/features/mdx/content-page";
import { formatDate } from "@/features/mdx/format-date";

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

  const { title, publishedAt, summary } = post.mdxSource.frontmatter;

  return (
    <ContentPage
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        datePublished: publishedAt,
        dateModified: publishedAt,
        description: summary,
        url: `${baseUrl}/notes/${post.slug}`,
        author: { "@type": "Person", name: "Abhinav Rajesh" },
      }}
      header={
        <>
          <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
          <p className="font-mono text-xs text-muted">
            {formatDate(publishedAt)}
          </p>
        </>
      }
      source={post.mdxSource.content}
    />
  );
};

export default Note;
