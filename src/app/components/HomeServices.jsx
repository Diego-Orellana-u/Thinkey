import ServicesCard from "./ServicesCard";
import { homeServices } from "data/services";

export default function HomeServices() {
  return (
    <div className="px-5 mobile-l:px-7 tablet-xl:px-12 desktop-l:px-[92px] desktop-l:pb-24 flex flex-col items-center text-center text-white gap-9 mb-24">
      <h2 className="text-h2-s tablet-s:text-h2-l font-bold text-[#002A54] tracking-tight desktop-s:mb-7 desktop-l:mb-12 desktop-l:text-h2-xl">
        A new way of approaching science to kids
      </h2>

      <div className="flex flex-col w-full tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center items-center gap-9 ">
        {homeServices.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
