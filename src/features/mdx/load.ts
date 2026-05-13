import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function readMDXFile<Metadata>(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const mdxSource = await serialize<{ frontmatter: Metadata }>(rawContent, {
    parseFrontmatter: true,
  });

  const content = rawContent.replace(/---\s*([\s\S]*?)\s*---/, "").trim();

  return {
    ...mdxSource,
    frontmatter: mdxSource.frontmatter as Metadata,
    content,
  };
}

export async function getMDXData<Metadata>(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  const mdxFilePromises = mdxFiles.map(async (file) => {
    const mdxSource = await readMDXFile<Metadata>(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      mdxSource,
      slug,
    };
  });

  return Promise.all(mdxFilePromises);
}
