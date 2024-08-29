import Image from "next/image";
import Link from "next/link";
import LineOne from "./Icons/LineOne";
import Star from "./Icons/Star";
import DibujoAtomo from "./Icons/DibujoAtomo";
import DibujoPocion from "./Icons/DibujoPocion";
import DibujoPlaneta from "./Icons/DibujoPlaneta";
import DibujoMolecula from "./Icons/DibujoMolecula";

import { buttonVariants } from "@/components/ui/button";

export default function Hero({
  heroInfo,
  headingSize,
  paddingTop,
  titlePaddingTop,
  firstBlobColor,
  secondBlobColor,
  thirdBlobColor,
  topBlobColor,
  separatedHeadingDisplay,
  headingWidth,
}) {
  return (
    <section
      className={`hero top-[-96px] h-full overflow-x-hidden ${
        paddingTop ? paddingTop : "pt-[150px]"
      }`}
    >
      <LineOne />
      <Star
        fillColor="fill-accent-900"
        y="top-[450px] tablet-l:top-[630px]"
        x="right-10"
        starOpacity="opacity-50"
        zIndex="-z-20"
        position="absolute"
      />
      <DibujoAtomo />
      <DibujoPocion />
      <DibujoPlaneta />
      <DibujoMolecula />

      <div className="blob-cont">
        {heroInfo.blobCenter && (
          <div className="blurblob top-0 desktop-s:w-2/4 desktop-s:-right-16 desktop-l:right-[10%] desktop-s:top-12">
            <div
              className={`${
                firstBlobColor ? firstBlobColor : "bg-secondary-100"
              } green opacity-40 desktop-s:opacity-100 blob`}
            ></div>
            <div
              className={`${
                secondBlobColor ? secondBlobColor : "bg-accent-900"
              } red opacity-40 desktop-s:opacity-100 blob`}
            ></div>
            <div
              className={`${
                thirdBlobColor ? thirdBlobColor : "bg-main-100"
              } blue opacity-40 desktop-s:opacity-100 blob`}
            ></div>
          </div>
        )}
      </div>

      {heroInfo.blobTop && (
        <div className="hidden desktop-s:flex blob-cont-two">
          <div className="blurblob-two top-0 desktop-s:left-0">
            <div
              className={`${
                topBlobColor ? topBlobColor : "bg-orange-500"
              } red-two blob`}
            ></div>
          </div>
        </div>
      )}
      <div className={`wrapper flex flex-col`}>
        <div
          className={`${
            !heroInfo.img
              ? "desktop-s:max-w-[70%]"
              : "tablet-xl:flex flex-row-reverse tablet-xl:gap-8 desktop-s:gap-12 desktop-l:gap-18 desktop-s:items-center"
          }`}
        >
          {heroInfo.img && (
            <div className="drop-shadow-2xl flex justify-center desktop-s:justify-end tablet-xl:self-center mb-6 tablet-xl:mb-0 tablet-xl:min-h-[700px]:pt-10 tablet-xl:w-3/4 desktop-s:w-2/4">
              <Image
                src={heroInfo.img}
                width={1920}
                height={1280}
                className={`${heroInfo.shadow && heroInfo.shadow} ${
                  heroInfo.imgCustomCss && heroInfo.imgCustomCss
                } rounded-full object-cover w-full desktop-s:w-full max-w-[350px] tablet-l:max-w-[600px] h-full`}
                alt=""
                priority={true}
              />
            </div>
          )}

          <div
            className={`${titlePaddingTop && titlePaddingTop} ${
              !heroInfo.heading1 ? "" : "desktop-s:mt-6"
            } tablet-xl:w-[81%] ${
              !heroInfo.img
                ? "desktop-s:w-[100%] desktop-l:w-9/12"
                : "desktop-l:w-9/12"
            } ${
              heroInfo.orientation === "left"
                ? "text-left"
                : "text-center desktop-s:text-left"
            } text-black-body-color`}
          >
            {heroInfo.heading1 && (
              <h1 className="text-[14px] desktop-l:text-p-s desktop-s:pl-[3px] mb-2 tablet-xl:mb-0 desktop-s:mb-2">
                {heroInfo.heading1}
              </h1>
            )}
            <div className="flex flex-col gap-6 tablet-l:gap-7 tablet-xl:gap-4">
              {heroInfo.separatedTitle1 && heroInfo.separatedTitle2 && (
                <>
                  <span
                    className={`${
                      headingSize
                        ? headingSize
                        : "text-h1-s min-[345px]:text-h2-s tablet-s:text-[3rem] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-l:text-h1-xl desktop-l:leading-[63px]"
                    } ${
                      headingWidth ? headingWidth : ""
                    } block text-black-heading-color tablet-s:leading-[57px] desktop-s:leading-[58px] desktop-l:mb-1 leading-[42px] font-bold pt-1 tablet-s:pt-5 tablet-xl:pt-0`}
                  >
                    {heroInfo.separatedTitle1}
                    <span
                      className={`${
                        headingSize
                          ? headingSize
                          : "text-h1-s min-[345px]:text-h2-s tablet-s:text-[3rem] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-l:text-h1-xl desktop-l:leading-[63px]"
                      } ${
                        heroInfo.titleGradient
                          ? heroInfo.titleGradient
                          : "text-black-heading-color"
                      } family-hero-gradient ml-[8px] tablet-s:text-[3rem] mobile-m:ml-0 ${
                        separatedHeadingDisplay
                          ? separatedHeadingDisplay
                          : "mobile-m:block min-[1280px]:block min-[1280px]:ml-0"
                      } text-h1-s tablet-s:leading-[57px] desktop-s:leading-[58px] desktop-l:mb-1 leading-[42px] font-bold`}
                    >
                      {heroInfo.separatedTitle2}
                    </span>
                  </span>
                </>
              )}
              {heroInfo.title && (
                <span
                  className={`${
                    headingSize
                      ? headingSize
                      : "desktop-l:text-h1-xl desktop-l:leading-[63px]"
                  } text-black-heading-color text-h1-s min-[345px]:text-h2-s tablet-s:text-[3rem] tablet-s:leading-[57px] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-s:leading-[58px]  desktop-l:mb-3 leading-[42px] font-bold pt-1 tablet-s:pt-5 tablet-xl:pt-0`}
                >
                  {heroInfo.title}
                </span>
              )}
              <p className="text-p-l tablet-l:mb-2 desktop-l:mb-5 desktop-s:max-w-[700px]">
                {heroInfo.desc}
              </p>
              <div
                className={`flex gap-8 ${
                  heroInfo.orientation === "left"
                    ? "justify-start"
                    : "justify-center"
                } desktop-s:justify-start desktop-l:w-[80%]`}
              >
                {heroInfo.mainBtnLink && (
                  <Link
                    href={heroInfo.mainBtnLink}
                    className={`${buttonVariants({
                      variant: "testLarge",
                    })} ${!heroInfo.secondBtnLink && ""} relative`}
                  >
                    <span className="z-10">{heroInfo.mainBtnText}</span>
                  </Link>
                )}

                {heroInfo.secondBtnLink && (
                  <Link
                    href={heroInfo.secondBtnLink}
                    className={`${buttonVariants({
                      variant: "testLarge",
                    })} relative max-w-fit`}
                  >
                    {heroInfo.secondBtnText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </section>
  );
}
