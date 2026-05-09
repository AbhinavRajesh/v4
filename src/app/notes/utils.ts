import { getMDXData } from "@/utils";
import path from "path";

export type NoteMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export function getNotes() {
  return getMDXData<NoteMetadata>(path.join(process.cwd(), "src", "notes"));
}
