import BorderWrapper from "@/components/common/BorderWrapper";
import Separator from "@/components/common/Separator";
import ServiceCard from "@/components/Service/ServiceCard";
import { getServices } from "@/app/services/utils";

const Services = async () => {
  const services = await getServices();

  return (
    <div className="flex flex-col font-sans">
      <Separator />
      <BorderWrapper padding="px-4" borderY="border-t">
        <h1 className="text-heading font-bold font-mono">Services</h1>
      </BorderWrapper>
      <BorderWrapper padding="px-4 py-1">
        <p className="text-body">Here are some of the services I provide.</p>
      </BorderWrapper>
      <BorderWrapper padding="" borderY="border-b">
        <div className="grid grid-cols-1">
          {services.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </BorderWrapper>
    </div>
  );
};

export default Services;
