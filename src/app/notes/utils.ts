import path from "path";
import { getMDXData } from "@/features/mdx/load";
import type { NoteMetadata } from "@/content/schemas";

export type { NoteMetadata };

export function getNotes() {
  return getMDXData<NoteMetadata>(
    path.join(process.cwd(), "src", "content", "notes"),
  );
}
