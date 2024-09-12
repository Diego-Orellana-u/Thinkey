import Image from "next/image";

export default function HeadingTwoHighlight({ color, title, titleCss }) {
  return (
    <div className={`flex justify-center`}>
      <h2
        className={`${titleCss && titleCss} ${
          color ? color : "text-black-heading-color"
        } relative max-w-[1200px] text-h2-s tablet-l:text-h2-l tablet-l:leading-10 desktop-s:text-h2-xl leading-8 desktop-s:leading-[3.5rem] text-center font-bold`}
      >
        {title &&
          title.map((text) =>
            text.highlight ? (
              <div key={text.key} className="inline">
                <div className={`relative inline-block`}>
                  <em>{text.text}</em>
                  <Image
                    className={`absolute ${
                      text.ubication
                        ? text.ubication
                        : "top-2 -left-5 min-w-[110%]"
                    } -z-50 max-h-[80%] object-cover`}
                    src="/highlight-marker.svg"
                    width={210}
                    height={61}
                    alt="Highlight marker image"
                  />{" "}
                </div>{" "}
              </div>
            ) : (
              <span
                className={`${text.block ? "block" : "inline"}`}
                key={text.key}
              >
                {text.text}{" "}
              </span>
            )
          )}
      </h2>
    </div>
  );
}
