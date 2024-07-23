import FiftyText from "./FiftyText";

export default function HomeFifty() {
  return (
    <div className="pt-28 px-5">
      <div className="flex flex-col items-center text-center gap-2 pb-12">
        <h2 className="text-3xl font-bold text-[#002A54] tracking-tight">
          Catchy title solving the problem
        </h2>
        <span className="text-[#424142] text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

      <div>
        <FiftyText />
        <FiftyText />
        <FiftyText />
      </div>
    </div>
  );
}
