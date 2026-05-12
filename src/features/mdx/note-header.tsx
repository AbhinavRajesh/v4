import { formatDate } from "@/features/mdx/format-date";

type Props = {
  title: string;
  publishedAt: string;
};

const NoteHeader = ({ title, publishedAt }: Props) => (
  <>
    <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
    <p className="font-mono text-xs text-muted">{formatDate(publishedAt)}</p>
  </>
);

export default NoteHeader;
