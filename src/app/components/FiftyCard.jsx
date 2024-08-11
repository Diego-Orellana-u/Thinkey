import Image from "next/image";
import Link from "next/link";
import RightArrow from "./Icons/RightArrow";

export default function FiftyCard({
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
      } mb-24 tablet-xl:gap-12 desktop-l:gap-16`}
    >
      <div className="mb-7 tablet-xl:w-2/4 tablet-xl:mb-0">
        <Image
          src={imgLink}
          width={imgWidth}
          height={imgHeight}
          className="rounded-[10px] tablet-xl:h-full object-cover shadow-lg"
          alt={imgAlt}
        />
      </div>
      <div className="tablet-xl:w-2/4 tablet-xl:self-center">
        <h3 className="text-main-heading-color text-h3-s font-bold leading-9 tracking-tight mb-5 desktop-l:mb-7 tablet-xl:text-h2-s desktop-l:text-h3-xl desktop-l:leading-[48px]">
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
            <div className="rounded-full bg-accent-900 tablet-xl:size-6 desktop-l:size-8 flex justify-center items-center pt-px">
              <RightArrow />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
