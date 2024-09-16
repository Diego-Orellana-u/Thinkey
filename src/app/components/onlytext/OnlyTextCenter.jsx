import Image from "next/image";

export default function OnlyTextCenter({ info }) {
  return (
    <section
      className={`${
        info.sectionPadding && info.sectionPadding
      } w-full wrapper flex items-center justify-center`}
    >
      <div className="w-full max-w-[830px] font-medium text-[2.1rem] desktop-s:text-[3.1rem] text-center leading-[1.22]">
        <div className={`flex justify-center`}>
          <div
            className={`text-black-heading-color
            relative max-w-[1200px] text-h2-s tablet-l:text-h2-l tablet-l:leading-10 desktop-s:text-h2-xl leading-8 desktop-s:leading-[3.5rem] font-semibold`}
          >
            {info.paragraph &&
              info.paragraph.map((text) =>
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
                        src={
                          text.highlightHref
                            ? text.highlightHref
                            : "/highlight-marker.svg"
                        }
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
          </div>
        </div>
      </div>
    </section>
  );
}
