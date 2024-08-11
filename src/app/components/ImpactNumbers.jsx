import Heading2 from "./Heading2";

export default function ImpactNumbers({ data }) {
  return (
    <div className="wrapper bg-main-heading-color desktop-s:h-[400px] desktop-l:h-[550px] desktop-l:pt-24 py-14 mobile-l:py-20 text-center">
      <Heading2
        title="Solving the education problem by the root"
        color="text-white-body-color"
        padding="mb-7 desktop-l:mb-16"
      />
      <div className="flex flex-col min-[700px]:flex-row gap-9 desktop-s:gap-20 desktop-l:gap-32 justify-center debug">
        {data.map((statistic) => (
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
