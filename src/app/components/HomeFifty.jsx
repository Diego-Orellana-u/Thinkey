import FiftyCard from "./FiftyCard";
import { homeFiftyCards, homeFiftyTitleDesc } from "data/fifty";

export default function HomeFifty() {
  return (
    <div className="wrapper pt-32 tablet-l:pt-44 desktop-s:pt-32 desktop-l:pb-32">
      <div className="flex flex-col text-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <h2 className="text-h2-s tablet-s:text-h2-l font-bold text-[#002A54] tracking-tight desktop-l:text-h2-xl desktop-l:leading-[67px]">
          {homeFiftyTitleDesc.title}
        </h2>
        <span className="text-[#424142] text-p-xl">
          {homeFiftyTitleDesc.desc}
        </span>
      </div>

      <div>
        {homeFiftyCards.map((card) => (
          <FiftyCard key={card.keys} {...card} />
        ))}
      </div>
    </div>
  );
}
