import FiftyCard from "./FiftyCard";
import { homeFiftyCards, homeFiftyTitleDesc } from "data/fifty";

export default function HomeFifty() {
  return (
    <div className="pt-28 px-5 mobile-l:px-7 mobile-l:pt-32 tablet-xl:px-12 tablet-xl:pt-0">
      <div className="flex flex-col items-center text-center gap-2 pb-12 tablet-xl:pb-16">
        <h2 className="text-3xl font-bold text-[#002A54] tracking-tight">
          {homeFiftyTitleDesc.title}
        </h2>
        <span className="text-[#424142] text-xl">
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
