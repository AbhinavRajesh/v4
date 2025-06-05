import Link from "next/link";
import { formatDate, getNotes } from "@/app/notes/utils";

export function Notes() {
  let allBlogs = getNotes();

  return (
    <div className="flex flex-col gap-4 font-sans">
      <h1 className="text-heading">Notes</h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
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
              {post.metadata.title}
            </h2>
            <p className="text-secondary text-xs group-hover:text-secondary/80 transition-all duration-150 ease-in-out">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-foreground text-sm group-hover:text-foreground/80 transition-all duration-150 ease-in-out">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  );
}

export default Notes;
