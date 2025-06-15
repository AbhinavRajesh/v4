import Link from "next/link";
import { getNotes } from "@/app/notes/utils";
import AccentLink from "@/components/common/AccentLink";
import { formatDate } from "@/utils";

async function Notes() {
  const notes = await getNotes();

  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading">Notes</h1>
      <p className="text-sm text-secondary pb-2">
        If you are looking for my old blog, you can find it{" "}
        <AccentLink href="https://blog.abhinavrajesh.com" isExternal>
          here
        </AccentLink>
        .
      </p>
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
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 group w-full"
            href={`/notes/${post.slug}`}
          >
            <h2 className="text-notes-h4 leading-none font-bold font-sans group-hover:text-foreground/80 transition-all duration-150 ease-in-out">
              {post.mdxSource.frontmatter.title}
            </h2>
            <p className="text-secondary text-xs group-hover:text-secondary/80 transition-all duration-150 ease-in-out">
              {formatDate(post.mdxSource.frontmatter.publishedAt, false)}
            </p>
            <p className="text-foreground text-sm group-hover:text-foreground/80 transition-all duration-150 ease-in-out">
              {post.mdxSource.frontmatter.summary}
            </p>
          </Link>
        ))}
    </div>
  );
}

export default Notes;
