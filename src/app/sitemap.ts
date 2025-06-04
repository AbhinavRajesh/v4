import { getNotes } from "@/app/notes/utils";

export const baseUrl = "https://www.abhinavrajesh.com";

export default async function sitemap() {
  let blogs = getNotes().map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/notes"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
