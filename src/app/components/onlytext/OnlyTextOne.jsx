import Heading2 from "../Heading2";
import HeadingTwoHighlight from "../HeadingTwoHighlight";
import Star from "../Icons/Star";

export default function OnlyTextOne({ onlyTextInfo }) {
  return (
    <section
      className={` ${
        onlyTextInfo.sectionPadding ? onlyTextInfo.sectionPadding : "py-20"
      } ${
        onlyTextInfo.bgColor ? onlyTextInfo.bgColor : "bg-accent-800"
      } flex flex-col wrapper ${
        onlyTextInfo.textColor ? onlyTextInfo.textColor : "text-white"
      }`}
    >
      <div className="text-left mb-4 mobile-l:mb-7 tablet-l:max-w-[750px] desktop-l:max-w-[850px]">
        <HeadingTwoHighlight
          color={`${
            onlyTextInfo.headingColor ? onlyTextInfo.headingColor : "text-black"
          }`}
          title={onlyTextInfo.title}
          titleJustify={onlyTextInfo.titleJustify}
          titleOrientation={onlyTextInfo.titleOrientation}
          titleCss={onlyTextInfo.titleCss}
        />
      </div>

      <div className="flex flex-col gap-5 mobile-m:pl-20 items-end">
        {onlyTextInfo.texts &&
          onlyTextInfo.texts.map((text) => (
            <p
              key={text.key}
              className={`max-w-[450px] desktop-s:max-w-full desktop-s:w-[588px] text-p-l tablet-l:text-p-xl tablet-l:leading-7 ${
                onlyTextInfo.textColor ? onlyTextInfo.textColor : "text-white"
              }`}
            >
              {text.text}
            </p>
          ))}
        {onlyTextInfo.highlight && (
          <div className="relative flex justify-end left-0">
            <Star
              fillColor={`${
                onlyTextInfo.starColor ? onlyTextInfo.starColor : "fill-[#333]"
              }`}
              y="top-1/4 desktop-s:bottom-0"
              x="-left-[90px] tablet-l:-left-10"
              starOpacity="opacity-90"
              zIndex=""
              anyCss="hidden mobile-m:block"
              position="absolute tablet-l:relative"
              width="70"
              height="70"
            />
            <p
              className={`max-w-[450px] desktop-s:max-w-full desktop-s:w-[588px] text-p-l tablet-l:text-p-xl tablet-l:leading-7 ${
                onlyTextInfo.textColor
                  ? onlyTextInfo.textColor
                  : "text-white-body-color"
              }`}
            >
              {onlyTextInfo.highlight}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
