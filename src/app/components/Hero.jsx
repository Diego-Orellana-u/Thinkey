import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="pt-5">
      <div>
        <Image
          className="w-full absolute top-0 -z-20 h-[700px]"
          src="test.svg"
          width={320}
          height={700}
        />
      </div>

      <div className="px-5 flex flex-col gap-3">
        <div>
          <span className="text-sm">EVENTOS CIENTIFICOS Y EDUCATIVOS</span>
        </div>
        <div className="max-[600px]:block hidden drop-shadow-2xl">
          <Image
            src="/fotoHero.webp"
            width={1920}
            height={1280}
            className="rounded-[20px] box-shadow-hero"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[28px] min-[345px]:text-[30px] leading-9 font-bold pt-1">
            Frase Catchy sobre lo que hacemos
          </span>
          <p className="text-lg text-[#424142]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utR.
          </p>
        </div>
      </div>

      <div className="px-5 pt-8">
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
          })} w-full rounded-[50px] bg-[#EA624A]`}
        >
          SEE MORE
        </Link>
      </div>
    </div>
  );
}
