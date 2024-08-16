import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function HeroTwo({ heroInfo }) {
  return (
    <section className="relative bg-black/80 desktop-s:text-center  py-14 wrapper desktop-s:py-20 desktop-l:pt-24">
      <Image
        src="/familias-science-kit.webp"
        width={1280}
        height={818}
        alt=""
        className="object-cover object-[50%_100%] h-full absolute w-full top-0 left-0 -z-20"
      ></Image>
      <div className="flex flex-col desktop-s:items-center">
        <h1 className="mb-5 desktop-s:mb-7 text-white-body-color text-h1-s mobile-m:text-h2-l tablet-s:text-[3rem] tablet-s:leading-[57px] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-s:leading-[58px] desktop-l:text-h1-xl desktop-l:leading-[63px] leading-[38px] font-bold pt-1 tablet-s:pt-5 tablet-xl:pt-0">
          {heroInfo.title}
        </h1>
        <p className="mb-7 text-p-l text-gray-200 leading-7 desktop-s:mb-10 desktop-s:max-w-[70%] desktop-l:max-w-[50%]">
          {heroInfo.desc}
        </p>
        {heroInfo.mainBtnLink && (
          <Link
            href={heroInfo.mainBtnLink}
            className={`${buttonVariants({
              variant: "linkHoverGreen",
            })} ${
              !heroInfo.secondBtnLink && "desktop-s:px-16 tablet-l:max-w-fit"
            } relative`}
          >
            <span className="z-10">{heroInfo.mainBtnText}</span>
          </Link>
        )}
      </div>
    </section>
  );
}
