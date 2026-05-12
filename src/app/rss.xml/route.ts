import { getNotes } from "@/content";
import { baseUrl } from "@/app/sitemap";
import config from "@/lib/site-config";

const escapeXml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );

export async function GET() {
  const notes = (await getNotes()).sort(
    (a, b) =>
      new Date(b.mdxSource.frontmatter.publishedAt).getTime() -
      new Date(a.mdxSource.frontmatter.publishedAt).getTime(),
  );

  const items = notes
    .map((n) => {
      const { title, publishedAt, summary } = n.mdxSource.frontmatter;
      const url = `${baseUrl}/notes/${n.slug}`;
      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.userData.name)} — Notes</title>
    <link>${baseUrl}/notes</link>
    <description>Notes by ${escapeXml(config.userData.name)}</description>
    <language>en</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
