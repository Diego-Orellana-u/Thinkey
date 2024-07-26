import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="pt-5 min-[332px]:pt-0 min-[560px]:pt-5 min-[940px]:h-[95vh]">
      <div>
        <Image
          className="w-full absolute top-0 -z-20 min-h-[700px] h-[125vh] min-[515px]:h-[785px] min-[550px]:h-[880px] min-[600px]:h-[900px] min-[630px]:h-[950px] min-[690px]:h-[980px] min-[768px]:h-[1020px] min-[900px]:hidden"
          src="/hero-bg.svg"
          width={320}
          height={700}
        />
      </div>

      <div>
        <Image
          className="w-full absolute top-0 -z-20 h-[98vh] hidden min-[900px]:block"
          src="/desktop-bg.png"
          width={1440}
          height={680}
        />
      </div>

      <div className="px-5 min-[425px]:px-7 min-[900px]:px-12 flex flex-col min-[1150px]:px-[92px]">
        <div className="min-[600px]:mb-2 max-[899px]:block hidden">
          <span className="text-sm">EVENTOS CIENTIFICOS Y EDUCATIVOS</span>
        </div>
        <div className="max-[899px]:block hidden drop-shadow-2xl mb-3">
          <Image
            src="/fotoHero.webp"
            width={1920}
            height={1280}
            className="rounded-[20px] box-shadow-hero object-cover max-h-[430px]"
          />
        </div>
        <div className="flex min-[900px]:gap-8 min-[1024px]:gap-12 min-[1150px]:gap-18">
          <div className="flex min-[1024px]:mt-6 flex-col gap-4 min-[768px]:gap-7 min-[900px]:w-[70%] min-[900px]:gap-4 min-[1150px]:gap-5">
            <div className="min-[600px]:mb-2 min-[900px]:block hidden min-[900px]:mb-0">
              <span className="text-sm min-[1150px]:text-base font-medium text-[#424142]">
                EVENTOS Y EXPERIENCIAS CIENTIFICAS/EDUCATIVAS
              </span>
            </div>
            <span className="min-[1150px]:leading-[72px] text-[28px] min-[345px]:text-[30px] min-[550px]:text-5xl min-[900px]:text-4xl min-[1150px]:text-6xl min-[1150px]:mb-3 leading-9 font-bold pt-1 min-[550px]:pt-5 min-[900px]:pt-0">
              Frase Catchy sobre lo que hacemos
            </span>
            <p className="text-lg text-[#424142] min-[768px]:mb-2 min-[1150px]:mb-4 min-[1150px]:w-[470px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="min-[768px]:flex gap-8 hidden min-[1150px]:w-[80%]">
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "link",
                })} w-full rounded-[50px] bg-[#EA624A] border-[#EA624A] border-2 text-white font-normal`}
              >
                SEE MORE
              </Link>
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "link",
                })} w-full rounded-[50px] bg-transparent border-[#16171D] border-2 text-[#424142] font-medium text-base`}
              >
                SEE MORE
              </Link>
            </div>
          </div>

          <div className="min-[900px]:block hidden drop-shadow-2xl mb-3 min-[900px]:mb-0 min-[900px]:w-[75%]">
            <Image
              src="/fotoHero.webp"
              width={1920}
              height={1280}
              className="rounded-[20px] box-shadow-hero object-cover max-h-[430px] h-full"
            />
          </div>
        </div>
      </div>

      <div className="px-5 min-[425px]:px-7 pt-8 max-[767px]:block hidden">
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
          })} w-full rounded-[50px] bg-[#EA624A] text-white font-normal`}
        >
          SEE MORE
        </Link>
      </div>
    </div>
  );
}
