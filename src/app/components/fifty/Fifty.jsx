import FiftyCard from "@/components/fifty/FiftyCard";
import HeadingTwoHighlight from "../HeadingTwoHighlight";

export default function Fifty({ fiftyInfo }) {
  return (
    <div
      className={`${
        fiftyInfo.sectionPadding ? fiftyInfo.sectionPadding : "py-10"
      }`}
    >
      <div className="wrapper mb-10 flex flex-col items-center">
        <HeadingTwoHighlight
          color="text-black-heading-color"
          title={fiftyInfo.title}
          titleCss={fiftyInfo.titleCss}
        />
        {fiftyInfo.desc && (
          <p className="text-gray-body-color mt-3 desktop-s:mt-8 text-p-s tablet-l:text-p-l text-center tablet-l:w-2/4 desktop-l:w-1/3">
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
