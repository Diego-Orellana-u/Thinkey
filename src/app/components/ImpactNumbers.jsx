import { impactNumbers } from "data/impactNumbers";
export default function ImpactNumbers() {
  return (
    <div className="bg-[#7062C4] desktop-s:h-[400px] desktop-l:h-[550px] desktop-l:pt-24 py-14 mobile-l:py-20 px-5 mobile-l:px-7 flex flex-col gap-7 items-center text-center">
      <h2 className="text-h2-s desktop-s:text-h2-l desktop-l:text-h2-xl desktop-l:mb-7 font-bold text-[#16171D]/70 tracking-tight">
        Solving the education problem by the root
      </h2>
      <div className="flex flex-col min-[700px]:flex-row gap-9 desktop-s:gap-20 desktop-l:gap-32">
        {impactNumbers.map((statistic) => (
          <div
            key={statistic.keys}
            className="flex flex-col items-center text-[#868686] font-bold"
          >
            <span className="text-h3-xl desktop-s:text-[4rem] desktop-l:text-[5rem] text-[#F2F2F2]">
              {statistic.number}
            </span>
            <span className="text-h3-s text-[#16171D]/70">
              {statistic.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
