import FiftyCard from "@/components/fifty/FiftyCard";
import HeadingTwoHighlight from "../HeadingTwoHighlight";

export default function Fifty({ fiftyInfo }) {
  return (
    <div
      className={`${
        fiftyInfo.sectionPadding ? fiftyInfo.sectionPadding : "py-10"
      }`}
    >
      <div className="wrapper flex flex-col text-center items-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <HeadingTwoHighlight
          color="text-black-heading-color"
          title={fiftyInfo.title}
          titleCss={fiftyInfo.titleCss}
        />
        {fiftyInfo.desc && (
          <p className="text-black-body-color text-p-xl desktop-s:max-w-[70%]">
            {fiftyInfo.desc}
          </p>
        )}
      </div>

      <div
        className={`flex flex-col ${
          fiftyInfo.card[0].type === "full" ? "" : "gap-24"
        }`}
      >
        {fiftyInfo.card.map((card) => (
          <FiftyCard key={card.keys} {...card} />
        ))}
      </div>
    </div>
  );
}
