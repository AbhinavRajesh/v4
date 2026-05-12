import { Mdx } from "@/features/mdx/mdx";

type Props = {
  header: React.ReactNode;
  source: string;
  jsonLd?: Record<string, unknown>;
};

const ContentPage = ({ header, source, jsonLd }: Props) => {
  return (
    <article className="space-y-8">
      {jsonLd && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <header className="space-y-2">{header}</header>
      <div className="text-foreground">
        <Mdx source={source} />
      </div>
    </article>
  );
};

export default ContentPage;
