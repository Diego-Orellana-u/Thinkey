import Image from "next/image";
import Link from "next/link";

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
          className="w-full rounded-[20px] tablet-xl:h-full object-cover"
          alt={imgAlt}
        />
      </div>
      <div className="tablet-xl:w-2/4 tablet-xl:self-center">
        <h3 className="text-[#16171D] text-2xl font-bold leading-9 tracking-tight mb-5 desktop-l:mb-7 tablet-xl:text-3xl desktop-l:text-5xl desktop-l:leading-[58px]">
          {title}
        </h3>
        <p className="text-lg text-[#424142] mb-5">{desc}</p>

        <div className="flex items-center gap-3">
          <Link
            className="text-[#002A54] font-medium text-lg tablet-xl:text-base desktop-l:text-lg"
            href={btnHref}
          >
            {btnText}
          </Link>
          <Image
            src="/go-icon.svg"
            width={30}
            height={30}
            alt="Icon of an arrow to go to another page"
            className="tablet-xl:size-6 desktop-l:size-8"
          />
        </div>
      </div>
    </div>
  );
}
