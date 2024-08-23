import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ServiceCard1 from "./Icons/ServiceCard1";
import ServiceCard2 from "./Icons/ServiceCard2";
import ServiceCard3 from "./Icons/ServiceCard3";

export default function ServicesCard(service) {
  return (
    <div className="relative service-shadow rounded-xl desktop-s:max-w-[30%] tablet-s:flex-[0_0_40%]">
      <span
        className={`absolute top-0 left-0 w-full h-full mt-1 ml-[6px] ${
          service.color ? service.color : "bg-indigo-500"
        }  rounded-xl`}
      ></span>
      <div
        className={`py-20 rounded-xl bg-yellowish-white-bg relative h-full p-5  border-2 ${
          service.color ? service.border : "border-indigo-500"
        } items-center flex flex-col gap-6 desktop-s:gap-0`}
      >
        {service.icon && service.icon === "ServiceCard1" && (
          <ServiceCard1 color="fill-accent-900" size="w-16 h-16 mb-2" />
        )}
        {service.icon === "ServiceCard2" && (
          <ServiceCard2 color="fill-accent-900" size="w-16 h-16 mb-2" />
        )}
        {service.icon === "ServiceCard3" && (
          <ServiceCard3 color="fill-accent-900" size="w-16 h-16 mb-2" />
        )}

        <h3 className="text-h3-s text-black-heading-color tablet-l:text-h2-s desktop-l:text-h3-xl font-semibold desktop-s:mb-4 desktop-l:mb-6">
          {service.title}
        </h3>
        <p className="mb-10 desktop-l:mb-12 desktop-s:text-p-l">
          {service.desc}
        </p>
        <Link
          href={service.btnHref}
          className={`${buttonVariants({
            variant: "hover",
          })} absolute mobile-l:max-w-fit desktop-s:px-16 bottom-10
        `}
        >
          <span className="z-10">{service.btnText}</span>
        </Link>
      </div>
    </div>
  );
}
