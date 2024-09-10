import Image from "next/image";

export default function HeadingTwoHighlight({
  color,
  titleCss,
  first,
  second,
  highlightTitleCss,
}) {
  return (
    <h2
      className={`${titleCss && titleCss} ${
        color ? color : "text-black-heading-color"
      } relative flex flex-col items-center text-h2-s tablet-l:text-h2-l tablet-l:leading-10 desktop-s:text-h2-xl leading-8 desktop-s:leading-[3.5rem] text-center font-bold`}
    >
      {first}
      <span className="relative">
        {second}
        <Image
          className={`absolute ${
            highlightTitleCss
              ? highlightTitleCss
              : "left-[20%] -top-2 min-[379px]:left-[-6%] w-[60%] min-[379px]:w-[55%] min-[379px]:top-1 desktop-s:top-2 max-h-[80%]"
          }  -z-10 object-cover`}
          src="/highlight-marker.svg"
          width={210}
          height={61}
          alt="Highlight marker image"
        />
      </span>
    </h2>
  );
}
