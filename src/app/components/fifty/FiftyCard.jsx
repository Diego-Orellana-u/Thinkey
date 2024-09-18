import Image from "next/image";
import Link from "next/link";
import RightArrow from "../Icons/RightArrow";
import { Button } from "../ui/button";

export default function FiftyCard({
  type,
  height,
  title,
  desc,
  btnText,
  btnHref,
  imgLink,
  imgAlt,
  imgWidth,
  imgHeight,
  orientation,
}) {
  return (
    <div
      className={`flex flex-col ${
        orientation === "reverse"
          ? "tablet-xl:flex-row-reverse"
          : "tablet-xl:flex-row"
      } ${
        type === "full" ? "mb-0" : "wrapper tablet-xl:gap-12 desktop-l:gap-16"
      } ${height && `desktop-s:h-[75vh]`}`}
    >
      <div
        className={`mb-7 tablet-xl:w-2/4 ${
          type === "full" && "tablet-s:mb-0"
        } tablet-xl:mb-0`}
      >
        <Image
          src={imgLink}
          width={imgWidth}
          height={imgHeight}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
          className={`${
            type === "original" && "rounded-xl"
          } tablet-xl:h-[390px] desktop-s:min-h-[390px] max-h-[450px] desktop-l:h-full object-cover shadow-lg`}
          alt={imgAlt}
        />
      </div>
      <div
        className={`${
          type === "full" && "wrapper py-16"
        } tablet-xl:w-2/4 tablet-xl:self-center`}
      >
        <h3 className="text-main-heading-color text-h3-s font-bold leading-8 tracking-tight mb-5 desktop-l:mb-7 tablet-xl:text-h2-s desktop-l:text-h3-xl desktop-l:leading-[48px]">
          {title}
        </h3>
        <p className="text-p-l tablet-l:text-p-xl tablet-l:leading-7 text-black-body-color mb-5">
          {desc}
        </p>

        {btnText && (
          <Link
            className="flex items-center gap-3 text-main-heading-color font-medium text-p-l tablet-xl:text-p-s desktop-l:text-p-l"
            href={btnHref}
          >
            {btnText}
            <div
              variant="testSmall"
              className="bg-btns-test text-black-heading-color hover:bg-accent-900 transition-all duration-200 border border-btns-border shadow-[3px_0_0_0_rgba(103,43,48,1)] rounded-full w-7 h-7 px-0  tablet-xl:size-6 desktop-l:size-8 flex justify-center items-center pt-px"
            >
              <RightArrow strokeColor="white" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
