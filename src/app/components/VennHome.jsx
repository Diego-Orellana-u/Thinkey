import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function VennHome({ data, sectionPadding }) {
  return (
    <div
      className={`wrapper ${
        sectionPadding ? sectionPadding : "pb-32 pt-56 tablet-xl:pt-32"
      } text-center relative`}
    >
      <div className="flex flex-col items-center justify-between gap-8 tablet-xl:flex-row-reverse tablet-xl:gap-12 desktop-s:gap-0">
        <Image
          src="/vennDiagram.svg"
          width={313}
          height={388}
          alt="Venn diagram with our core values, learning, science and enjoyment"
          className="desktop-s:w-2/5"
        />

        <div className="flex flex-col gap-8 items-center tablet-xl:items-start tablet-xl:gap-0 desktop-s:flex-[0_0_55%]">
          <h2 className="absolute tablet-xl:relative top-16 tablet-xl:top-0 mb-8 text-h2-s tablet-s:text-h2-l tablet-s:leading-[48px] tablet-xl:text-left font-bold text-black-heading-color tracking-tight desktop-s:text-h2-l desktop-l:text-h2-xl desktop-l:leading-[67px]">
            {data.title}
            <span className="block">{data.highlightTitle}</span>
            <Image
              className="absolute top-10 -z-10 right-[0px] w-[75%] desktop-s:top-10 desktop-l:top-14"
              src="/highlight-marker.svg"
              width={210}
              height={61}
              alt="Highlight marker image"
            />
          </h2>

          <p className="text-p-l tablet-xl:text-p-xl text-black-body-color tablet-xl:text-left tablet-xl:mb-10 desktop-s:w-10/12">
            {data.desc}
          </p>

          <Link
            href="/"
            className={`${buttonVariants({
              variant: "testLarge",
            })} desktop-s:max-w-fit desktop-s:px-16 relative
        `}
          >
            <span className="z-10">{data.btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
