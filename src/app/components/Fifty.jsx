import FiftyCard from "./FiftyCard";
import Heading2 from "./Heading2";

export default function Fifty({ fiftyCards, title, desc, sectionPadding }) {
  return (
    <div className={`${sectionPadding ? sectionPadding : "py-10"}`}>
      <div className="wrapper flex flex-col text-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <Heading2 title={title} />
        {desc && (
          <span className="text-black-body-color text-p-xl">{desc}</span>
        )}
      </div>

      <div className="flex flex-col gap-24">
        {fiftyCards.map((card) => (
          <FiftyCard key={card.keys} {...card} />
        ))}
      </div>
    </div>
  );
}
