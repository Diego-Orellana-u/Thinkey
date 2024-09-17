import Image from "next/image";
import Heading2 from "../Heading2";
import Link from "next/link";
import HeadingTwoHighlight from "../HeadingTwoHighlight";
import RightArrow from "../Icons/RightArrow";

export default function ServicesImg({ servicesInfo }) {
  return (
    <div
      className={`wrapper ${
        servicesInfo.sectionPadding ? servicesInfo.sectionPadding : "py-20"
      }`}
    >
      <div className="mb-0 flex flex-col items-center">
        <HeadingTwoHighlight
          color="text-black-heading-color"
          titleCss={servicesInfo.titleCss}
          title={servicesInfo.title}
        />
        <p className="text-gray-body-color mt-3 desktop-s:mt-8 text-p-s tablet-l:text-p-l text-center tablet-l:w-2/4 desktop-l:w-1/3">
          {servicesInfo.desc}
        </p>
      </div>
      <Link
        href="/hola"
        className="flex flex-col desktop-s:flex-row items-center justify-between mt-10 gap-5"
      >
        {servicesInfo.servicesCard &&
          servicesInfo.servicesCard.map((card, idx) => (
            <div
              key={card.key + idx}
              className="box-shadow-testimonies w-full max-w-96 group relative block h-fit"
            >
              <span className="absolute inset-0 border-2 border-dashed border-zinc-400 rounded-xl"></span>

              <div className="h-[28rem] rounded-xl min-h-fit relative flex transform items-end border-2 border-zinc-500 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="flex justify-end flex-col gap-8 absolute w-full p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 tablet-s:p-6 desktop-s:p-8">
                  <Image
                    src={card.outsideImgSrc}
                    width={card.outsideImgWidth}
                    height={card.outsideImgHeight}
                    alt={card.outsideImgAlt}
                    className="w-full"
                  />
                  <span className="mt-4 text-xl font-medium tablet-s:text-2xl">
                    {card.title}
                  </span>
                </div>

                <div className="h-full p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 tablet-s:p-6 desktop-s:p-8">
                  <div className="flex justify-center">
                    <Image
                      className="object-cover rounded-xl w-fit max-h-52"
                      src={card.insideImgSrc}
                      width={card.insideImgWidth}
                      height={card.insideImgHeight}
                      alt={card.insideImgAlt}
                    />
                  </div>
                  <h3 className="mt-5 text-p-l font-medium tablet-s:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-black-body-color text-p-s tablet-s:text-base">
                    {card.desc}
                  </p>

                  <span className="absolute flex gap-3 items-center text-p-l bottom-5 tablet-s:bottom-6 desktop-s:bottom-5 font-bold">
                    {card.linkText}
                    <div
                      variant="testSmall"
                      className="bg-btns-test text-black-heading-color hover:bg-accent-900 transition-all duration-200 border border-btns-border shadow-[3px_0_0_0_rgba(103,43,48,1)] rounded-full size-5 px-0 tablet-l:size-7 flex justify-center items-center pt-px"
                    >
                      <RightArrow strokeColor="white" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </Link>
    </div>
  );
}
