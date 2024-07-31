import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ServicesCard from "./ServicesCard";

export default function HomeServices() {
  return (
    <div className="flex flex-col items-center text-center px-5 mobile-l:px-7 text-white gap-9 mb-24">
      <h2 className="text-3xl font-bold text-[#002A54] tracking-tight">
        A new way of approaching science to kids
      </h2>

      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  );
}
