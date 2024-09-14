"use client";
import VerticalLine from "@/components/VerticalLine";
import { useRef } from "react";
import HeadingTwoHighlight from "./HeadingTwoHighlight";
import Image from "next/image";

export default function Timeline({ timelineInfo }) {
  const containerRef = useRef(null);

  return (
    <section>
      <div className="mb-10 flex flex-col items-center">
        <HeadingTwoHighlight
          color="text-black-heading-color"
          titleCss={timelineInfo.titleCss}
          title={timelineInfo.title}
        />
        <p className="text-gray-body-color mt-3 desktop-s:mt-8 text-p-s tablet-l:text-p-l text-center tablet-l:w-2/4 desktop-l:w-1/3">
          {timelineInfo.desc}
        </p>
      </div>
      <div
        ref={containerRef}
        className="pt-10 pb-20 wrapper h-fit  relative borde"
      >
        <VerticalLine
          height="h-fit"
          strokeColor={timelineInfo.strokeColor}
          strokeWidth={timelineInfo.strokeWidth}
          containerRef={containerRef}
        />
        <div className="flex flex-col gap-16 desktop-s:gap-32">
          {timelineInfo.milestones &&
            timelineInfo.milestones.map((milestone, index) => (
              <div
                key={milestone.key}
                className={`desktop-s:flex desktop-s:gap-32 desktop-s:items-center desktop-s:p-0 desktop-s:justify-between rounded-xl p-5 z-0 mobile-m:p-8 pb-10 mobile-m:pb-12 h-fit service-shadow bg-white desktop-s:bg-transparent desktop-s:shadow-none w-full  ${
                  (index + 1) % 2 === 0
                    ? "desktop-s:flex-row-reverse"
                    : "desktop-s:flex-row"
                }`}
              >
                <div>
                  <div className="mb-5">
                    <span className="relative text-black-heading-color block text-h1-xl desktop-s:text-[5rem] font-bold">
                      <span className="relative z-50">{milestone.date}</span>
                      <Image
                        className={`z-10 ${
                          milestone.highlightCss
                            ? milestone.highlightCss
                            : "top-2 mobile-m:left-[-2%] desktop-s:top-2"
                        } absolute w-[55%] max-w-[139px] desktop-s:max-w-[220px] h-[120%] min-[379px]:top-1 max-h-[80%] object-cover`}
                        src={`${
                          milestone.highlightHref
                            ? milestone.highlightHref
                            : "/highlight-marker.svg"
                        }`}
                        width={210}
                        height={61}
                        alt="Highlight marker image"
                      />
                    </span>
                    <span className="text-h3-s desktop-s:text-h2-l">
                      {milestone.title}
                    </span>
                    <span
                      className={`block border-b pb-1 w-1/4 ${
                        milestone.lineColor
                          ? milestone.lineColor
                          : "border-red-500"
                      } `}
                    ></span>
                  </div>
                  <p className="text-p-l text-gray-body-color">
                    {milestone.text}
                  </p>
                </div>
                <div className="pt-7 desktop-s:flex-[0_0_45%] desktop-s:pt-0">
                  <Image
                    src="/Slime.jpg"
                    className="rounded-xl"
                    width={1280}
                    height={720}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
