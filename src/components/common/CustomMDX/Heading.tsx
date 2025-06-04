import React from "react";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function getHeadingClassName(level: number) {
  switch (level) {
    case 2:
      return "font-sans font-semibold text-notes-h2";
    case 3:
      return "font-sans font-semibold text-notes-h3";
    case 4:
      return "font-sans font-semibold text-notes-h4";
    case 5:
      return "font-sans font-semibold text-notes-h4";
    case 6:
      return "font-sans font-semibold text-notes-h4";
    default:
      return "";
  }
}

function createHeading(level: number) {
  const actualLevel = level === 1 ? 2 : level;
  const Heading = ({ children }: { children: any }) => {
    let slug = slugify(children.toString());

    return React.createElement(
      `h${actualLevel}`,
      {
        id: slug,
        className: getHeadingClassName(actualLevel),
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${actualLevel}`;

  return Heading;
}

export { createHeading };
