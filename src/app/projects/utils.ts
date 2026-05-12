import path from "path";
import { getMDXData } from "@/utils";
import type { ProjectMetadata } from "@/content/schemas";

export type { ProjectMetadata };

export function getProjects() {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), "src", "content", "projects"),
  );
}
