import { getServices } from "@/app/services/utils";
import Link from "next/link";

type IService = Awaited<ReturnType<typeof getServices>>[number];

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="p-4 hover:bg-foreground/3 transition-all duration-300"
    >
      <h2 className="text-heading">{service.mdxSource.frontmatter.title}</h2>
      <p className="text-body">
        {service.mdxSource.frontmatter.short_description}
      </p>
    </Link>
  );
};

export default ServiceCard;
