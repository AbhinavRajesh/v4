import path from "path";
import { getMDXData } from "@/features/mdx/load";
import type { ProjectMetadata } from "@/content/schemas";

export type { ProjectMetadata };

export function getProjects() {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), "src", "content", "projects"),
  );
}
