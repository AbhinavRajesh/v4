import { getMDXData } from "@/utils";
import path from "path";

type Metadata = {
  title: string;
  short_description: string;
  tagline: string;
};

export function getServices() {
  return getMDXData<Metadata>(path.join(process.cwd(), "src", "services"));
}
