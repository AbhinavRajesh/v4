import { getMDXData } from "@/utils";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export function getNotes() {
  return getMDXData<Metadata>(path.join(process.cwd(), "src", "notes"));
}
