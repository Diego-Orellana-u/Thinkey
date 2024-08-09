import FiftyCard from "./FiftyCard";
import Heading2 from "./Heading2";

export default function Fifty({ fiftyCards, fiftyTitleDesc }) {
  return (
    <div className="wrapper desktop-l:pb-32">
      <div className="flex flex-col text-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <Heading2 title={fiftyTitleDesc.title} />
        <span className="text-black-body-color text-p-xl">
          {fiftyTitleDesc.desc}
        </span>
      </div>

      <div>
        {fiftyCards.map((card) => (
          <FiftyCard key={card.keys} {...card} />
        ))}
      </div>
    </div>
  );
}
