import { getMDXData } from "@/utils";
import path from "path";

type Metadata = {
  title: string;
  github_repo: string;
  tagline: string;
  short_description: string;
  highlight: string;
  is_group_project: boolean;
  tags: string[];
  description: string;
  image?: string;
};

export function getProjects() {
  return getMDXData<Metadata>(path.join(process.cwd(), "src", "projects"));
}
