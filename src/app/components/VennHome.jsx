import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import HighlightTitle from "./HighlightTitle";

export default function VennHome() {
  return (
    <div className="px-5 mobile-l:px-7 tablet-xl:px-12 desktop-l:px-[92px] pt-14 pb-20 text-center">
      <div className="tablet-xl:hidden">
        <HighlightTitle />
      </div>
      <div className="flex flex-col items-center gap-8 tablet-xl:flex-row-reverse tablet-xl:gap-12 desktop-l:gap-32">
        <div className="desktop-s:w-full">
          <Image
            src="/VennDiagram.svg"
            width={313}
            height={388}
            alt=""
            className="desktop-s:w-full"
          />
        </div>
        <div className="flex flex-col gap-8 items-center tablet-xl:items-start tablet-xl:gap-0 desktop-s:flex-[0_0_55%]">
          <div className="hidden tablet-xl:block">
            <HighlightTitle />
          </div>
          <p className="text-p-l text-[#424142] tablet-xl:text-left tablet-xl:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "link",
            })} w-full min-[520px]:w-fit px-10 rounded-[50px] bg-[#16171D] border-[#16171D] border-2 text-[#F2F2F2] h-14`}
          >
            SEE MORE ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
}
