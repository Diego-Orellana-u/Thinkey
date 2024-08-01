import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function ServicesCard(service) {
  return (
    <div className="bg-[#6159BC] items-center justify-center px-4 mobile-l:px-8 py-9 flex flex-col gap-6 rounded-[20px] h-[350px] desktop-s:h-[430px] desktop-l:h-[515px] tablet-s:min-w-[229px] tablet-l:min-w-[320px] max-w-[30%] tablet-s:flex-[0_0_40%]">
      <Image
        className="hidden desktop-s:block max-[1150px]:w-12"
        src={service.icon}
        alt={service.iconAlt}
        width={service.iconWidth}
        height={service.iconHeight}
      />
      <h3 className="text-2xl tablet-l:text-[30px] desktop-l:text-[35px] font-semibold">
        {service.title}
      </h3>
      <p>{service.desc}</p>
      <Link
        href={service.btnHref}
        className={`${buttonVariants({
          variant: "link",
        })} w-full rounded-[50px] bg-[#EA624A]`}
      >
        {service.btnText}
      </Link>
    </div>
  );
}
