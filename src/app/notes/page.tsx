import Link from "next/link";
import { Metadata } from "next";
import { getNotes } from "@/app/notes/utils";
import { formatDate } from "@/utils";
import AccentLink from "@/components/ui/accent-link";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes on programming, the web, and things I'm building.",
};

const Notes = async () => {
  const notes = await getNotes();
  const sorted = notes.sort(
    (a, b) =>
      new Date(b.mdxSource.frontmatter.publishedAt).getTime() -
      new Date(a.mdxSource.frontmatter.publishedAt).getTime(),
  );

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-xl font-medium">Notes</h1>
        <p className="text-sm text-muted">
          Things I&apos;ve been thinking about, mostly programming. Looking for
          older posts? They&apos;re archived at{" "}
          <AccentLink href="https://blog.abhinavrajesh.com">
            blog.abhinavrajesh.com
          </AccentLink>
          .
        </p>
      </header>

      <ul className="divide-y divide-subtle">
        {sorted.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="group flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-foreground transition-colors group-hover:text-accent">
                {note.mdxSource.frontmatter.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {formatDate(note.mdxSource.frontmatter.publishedAt)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
