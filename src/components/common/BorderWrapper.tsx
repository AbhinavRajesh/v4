import { JSX } from "react";

interface BorderWrapper {
  children: JSX.Element | JSX.Element[];
  padding?: string;
  borderY?: "border-t" | "border-b" | "border-y";
}

const BorderWrapper = ({
  children,
  padding = "p-4",
  borderY = "border-y",
}: BorderWrapper) => {
  return (
    <div className={`${borderY} border-edge px-2`}>
      <section className={`max-w-2xl mx-auto ${padding} border-x border-edge`}>
        {children}
      </section>
    </div>
  );
};

export default BorderWrapper;
