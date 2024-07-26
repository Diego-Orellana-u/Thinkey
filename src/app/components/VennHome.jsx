import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function VennHome() {
  return (
    <div className="px-5 min-[425px]:px-7 pt-14 pb-20 text-center">
      <div className="relative">
        <h2 className="text-3xl font-bold text-[#002A54] tracking-tight mb-8">
          Make your students start loving science
        </h2>
        <Image
          className="absolute top-7 left-[25%] min-[425px]:left-[32%] -z-10"
          src="/highlight-marker.svg"
          width={210}
          height={61}
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="">
          <Image src="/VennDiagram.svg" width={313} height={388} />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="hidden">Make your students start loving science</h2>
          <p className="text-lg text-[#424142]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "link",
            })} w-full rounded-[50px] bg-[#16171D]`}
          >
            SEE MORE ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
}
