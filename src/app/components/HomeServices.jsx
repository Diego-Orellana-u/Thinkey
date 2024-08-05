import ServicesCard from "./ServicesCard";
import { homeServices } from "data/services";

export default function HomeServices() {
  return (
    <div className="wrapper desktop-l:pb-24 text-center mb-24">
      <h2 className="mb-10 text-h2-s tablet-s:text-h2-l font-bold text-[#002A54] tracking-tight desktop-s:mb-7 desktop-l:mb-14 desktop-l:text-h2-xl">
        A new way of approaching science to kids
      </h2>

      <div className="flex flex-col tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center desktop-s:justify-between gap-9 ">
        {homeServices.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
