import Image from "next/image";
import test from "../../../public/test.svg";
import fotoHero from "../../../public/fotoHero.webp";

export default function Hero() {
  return (
    <div className="pt-5">
      <div className="px-5 flex flex-col gap-3">
        <div>
          <span className="text-sm">EVENTOS CIENTIFICOS Y EDUCATIVOS</span>
        </div>
        <div className="max-[600px]:block hidden drop-shadow-2xl">
          <Image src={fotoHero} className="rounded-[20px] box-shadow-hero" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[28px] min-[345px]:text-[30px] leading-9 font-bold">
            Frase Catchy sobre lo que hacemos
          </span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </div>

      <div>
        <Image className="w-full absolute top-0 -z-20" src={test} />
      </div>
    </div>
  );
}
