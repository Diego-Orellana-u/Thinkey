import Image from "next/image";
import Link from "next/link";

export default function FiftyText() {
  return (
    <div className="flex flex-col mb-24">
      <div className="mb-7">
        <Image
          src="/5050.jpg"
          width={312}
          height={221}
          className="w-full rounded-[20px]"
        />
      </div>
      <div>
        <h3 className="text-[#16171D] text-2xl font-bold leading-9 tracking-tight mb-5">
          Building steam experiences that teach and impact
        </h3>
        <p className="text-lg text-[#424142] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <div className="flex items-center gap-3">
          <Link className="text-[#002A54] font-medium text-lg" href="/">
            SEE MORE
          </Link>
          <Image src="/go-icon.svg" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
