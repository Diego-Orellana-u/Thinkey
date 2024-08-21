import Image from "next/image";
import Heading2 from "./Heading2";
import Link from "next/link";

export default function ServicesImg({ data, title, sectionPadding }) {
  return (
    <div className={`wrapper ${sectionPadding ? sectionPadding : "py-20"}`}>
      <Heading2 title={title} />
      <div className="flex flex-col desktop-s:flex-row items-center justify-between mt-20 gap-5">
        {data &&
          data.map((card) => (
            <div
              key={card.key}
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
                  <h3 className="mt-4 text-xl font-medium tablet-s:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-p-s tablet-s:text-base">
                    {card.desc}
                  </p>

                  <Link
                    href={card.serviceHref}
                    className="absolute bottom-5 tablet-s:bottom-6 desktop-s:bottom-8 font-bold"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
