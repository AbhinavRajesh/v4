/* eslint-disable @typescript-eslint/no-explicit-any */

import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/features/mdx/components";

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
