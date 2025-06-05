import { getNotes } from "@/app/notes/utils";
import { getProjects } from "./projects/utils";

export const baseUrl = "https://www.abhinavrajesh.com";

export default async function sitemap() {
  const blogs = (await getNotes()).map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: post.mdxSource.frontmatter.publishedAt,
  }));

  const projects = (await getProjects()).map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/notes", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
