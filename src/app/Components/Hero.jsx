import Image from "next/image";
import test from "../../../public/test.svg";

export default function Hero() {
  return (
    <div>
      <div className="px-5 flex flex-col gap-5">
        <span className="text-[28px] min-[345px]:text-[30px] leading-9 font-bold">
          Frase Catchy sobre lo que hacemos
        </span>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
      </div>

      <div>
        <Image className="w-full absolute top-0 -z-20" src={test} />
      </div>
    </div>
  );
}
