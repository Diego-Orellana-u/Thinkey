import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function ServicesCard(service) {
  return (
    <div className="bg-white service-shadow items-center desktop-l:pt-16 px-4 mobile-l:px-8 desktop-l:px-12 py-10 flex flex-col gap-6 desktop-s:gap-0 rounded-[10px] desktop-l:pb-16 desktop-s:max-w-[30%] tablet-s:flex-[0_0_40%]">
      <Image
        className="max-[1150px]:size-12 desktop-l:size-16 desktop-s:mb-4 desktop-l:mb-6"
        src={service.icon}
        alt={service.iconAlt}
        width={service.iconWidth}
        height={service.iconHeight}
      />

      <h3 className="text-h3-s tablet-l:text-h2-s desktop-l:text-h3-xl font-semibold desktop-s:mb-4 desktop-l:mb-12">
        {service.title}
      </h3>
      <p className="desktop-s:mb-8 desktop-l:mb-12 desktop-s:text-p-l">
        {service.desc}
      </p>
      <Link
        href={service.btnHref}
        className={`${buttonVariants({
          variant: "link",
        })} w-9/12 rounded-[50px] bg-[#EA624A] text-white`}
      >
        {service.btnText}
      </Link>
    </div>
  );
}
