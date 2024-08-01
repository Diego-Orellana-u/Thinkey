import FiftyCard from "./FiftyCard";
import { homeFiftyCards, homeFiftyTitleDesc } from "data/fifty";

export default function HomeFifty() {
  return (
    <div className="pt-28 px-5 mobile-l:px-7 mobile-l:pt-32 tablet-xl:px-12 tablet-xl:pt-0 desktop-l:px-[92px] desktop-l:pt-8 desktop-l:pb-32">
      <div className="flex flex-col items-center text-center gap-2 pb-12 tablet-xl:pb-16 desktop-l:gap-8">
        <h2 className="text-h2-s font-bold text-[#002A54] tracking-tight desktop-s:text-[38px] desktop-l:text-h2-xl desktop-l:leading-[67px]">
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
