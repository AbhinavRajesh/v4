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

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
