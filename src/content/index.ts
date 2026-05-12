import path from "path";
import { getMDXData } from "@/features/mdx/load";

export type NoteMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

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

export function getNotes() {
  return getMDXData<NoteMetadata>(
    path.join(process.cwd(), "src", "content", "notes"),
  );
}

export function getProjects() {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), "src", "content", "projects"),
  );
}
