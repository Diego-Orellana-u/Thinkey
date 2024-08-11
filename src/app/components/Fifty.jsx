import FiftyCard from "./FiftyCard";
import Heading2 from "./Heading2";

export default function Fifty({ fiftyCards, fiftyTitleDesc }) {
  return (
    <div className={`desktop-l:pb-32`}>
      <div className="wrapper flex flex-col text-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <Heading2 title={fiftyTitleDesc.title} />
        {fiftyTitleDesc.desc && (
          <span className="text-black-body-color text-p-xl">
            {fiftyTitleDesc.desc}
          </span>
        )}
      </div>

      {fiftyCards.map((card) => (
        <FiftyCard key={card.keys} {...card} />
      ))}
    </div>
  );
}
