import ServicesCard from "./ServicesCard";
import { homeServices } from "data/services";

export default function HomeServices() {
  return (
    <div className="px-5 mobile-l:px-7 tablet-xl:px-12 desktop-l:px-[92px] flex flex-col items-center text-center text-white gap-9 mb-24">
      <h2 className="text-3xl font-bold text-[#002A54] tracking-tight">
        A new way of approaching science to kids
      </h2>

      <div className="flex flex-col w-full tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center items-center gap-9 min-[1276px]:justify-between">
        {homeServices.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
