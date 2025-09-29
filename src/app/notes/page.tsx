import Link from "next/link";
import { getNotes } from "@/app/notes/utils";
import AccentLink from "@/components/common/AccentLink";
import { formatDate } from "@/utils";
import { Metadata } from "next";
import Separator from "@/components/common/Separator";
import BorderWrapper from "@/components/common/BorderWrapper";

export const metadata: Metadata = {
  title: "Notes",
  description: "My notes on various topics, mostly about programming",
};

async function Notes() {
  const notes = await getNotes();

  return (
    <div className="flex flex-col font-sans">
      <Separator />
      <BorderWrapper padding="px-4" borderY="border-t">
        <h1 className="text-heading">Notes</h1>
      </BorderWrapper>
      <BorderWrapper>
        <p className="text-sm text-secondary">
          If you are looking for my old blog, you can find it{" "}
          <AccentLink
            href="https://blog.abhinavrajesh.com"
            isExternal
            aria-label="here at https://blog.abhinavrajesh.com"
          >
            here
          </AccentLink>
          .
        </p>
      </BorderWrapper>
      {notes
        .sort((a, b) => {
          if (
            new Date(a.mdxSource.frontmatter.publishedAt) >
            new Date(b.mdxSource.frontmatter.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <BorderWrapper key={post.slug} padding="" borderY="border-b">
            <Link
              className="flex flex-col space-y-1 group w-full p-4"
              href={`/notes/${post.slug}`}
            >
              <h2 className="text-notes-h4 leading-normal font-bold font-sans group-hover:text-foreground/80 transition-all duration-150 ease-in-out">
                {post.mdxSource.frontmatter.title}
              </h2>
              <p className="text-secondary text-xs group-hover:text-secondary/80 transition-all duration-150 ease-in-out">
                {formatDate(post.mdxSource.frontmatter.publishedAt, false)}
              </p>
              <p className="text-foreground text-sm group-hover:text-foreground/80 transition-all duration-150 ease-in-out">
                {post.mdxSource.frontmatter.summary}
              </p>
            </Link>
          </BorderWrapper>
        ))}
    </div>
  );
}

export default Notes;
