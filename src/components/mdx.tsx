/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import Socials from "@/components/socials";

const Anchor = (props: any) => {
  const href: string = props.href ?? "";
  const className =
    "text-accent underline underline-offset-4 transition-colors hover:no-underline";

  if (href.startsWith("/")) {
    return <Link {...props} className={className} />;
  }
  if (href.startsWith("#")) {
    return <a {...props} className={className} />;
  }
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    />
  );
};

const Code = ({ children, ...props }: any) => {
  const html = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};

const Image = (props: any) => (
  <img alt={props.alt} className="my-6 rounded-md" {...props} />
);

const YouTube = ({ id }: { id: string }) => (
  <div className="my-6 aspect-video overflow-hidden rounded-md">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full"
    />
  </div>
);

const Table = ({
  data,
}: {
  data: { headers: string[]; rows: string[][] };
}) => (
  <div className="my-6 overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-subtle">
          {data.headers.map((h, i) => (
            <th key={i} className="px-3 py-2 text-left font-medium">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, ri) => (
          <tr key={ri} className="border-b border-subtle">
            {row.map((cell, ci) => (
              <td key={ci} className="px-3 py-2 text-muted">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const components = {
  a: Anchor,
  code: Code,
  Image,
  YouTube,
  Socials,
  Table,
  h2: (props: any) => (
    <h2 className="mt-10 mb-3 text-xl font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-8 mb-2 text-base font-semibold" {...props} />
  ),
  p: (props: any) => <p className="my-4 leading-7 text-foreground" {...props} />,
  ul: (props: any) => (
    <ul className="my-4 list-disc space-y-1 pl-5" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-4 list-decimal space-y-1 pl-5" {...props} />
  ),
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-2 border-subtle pl-4 italic text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-subtle" />,
};

export const Mdx = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        ...(props.options || {}),
        blockJS: false,
      }}
    />
  );
};
