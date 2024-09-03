import Heading2 from "./Heading2";

export default function ImpactNumbers({ impactSectionInfo }) {
  return (
    <div
      className={`wrapper ${
        impactSectionInfo.sectionPadding
          ? impactSectionInfo.sectionPadding
          : "desktop-l:pt-24 py-14 mobile-l:py-20"
      } ${
        impactSectionInfo.bgColor ? impactSectionInfo.bgColor : "bg-main-200"
      } desktop-s:h-[400px] desktop-l:h-[550px] text-center`}
    >
      <Heading2
        title="Solving the education problem by the root"
        color="text-white-body-color"
        padding="mb-7 desktop-l:mb-16"
      />
      <div className="flex flex-col min-[700px]:flex-row gap-9 desktop-s:gap-20 desktop-l:gap-32 justify-center debug">
        {impactSectionInfo.stats.map((statistic) => (
          <div key={statistic.keys} className="flex flex-col font-bold">
            <span className="text-h3-xl desktop-s:text-[4rem] desktop-l:text-[5rem] text-secondary-100">
              {statistic.number}
            </span>
            <span className="text-h3-s text-white-body-color debug1 font-normal">
              {statistic.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
