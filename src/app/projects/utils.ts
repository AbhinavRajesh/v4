import { getMDXData } from "@/utils";
import path from "path";

export type ProjectMetadata = {
  title: string;
  github_repo: string;
  tagline: string;
  short_description: string;
  highlight: string;
  is_group_project: boolean;
  tags: string[];
  description: string;
  image?: string;
  year?: string;
  live_url?: string;
};

export function getProjects() {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), "src", "projects"),
  );
}
