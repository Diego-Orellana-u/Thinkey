import Image from "next/image";
import { Button } from "../ui/button";

export default function OptionalExtras() {
  return (
    <div className="px-3 mobile-m:px-5 flex flex-col gap-4 mb-16">
      <div className="border border-[#dfdfdf] p-2">
        <div className="flex items-center relative">
          <div>
            <div className="w-[100px] h-[100px]">
              <Image
                src="/test-optional.webp"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
            </div>
          </div>

          {/* Extra item info */}
          <div className="flex flex-col ml-3 w-full">
            <div className="flex justify-between">
              <span className="block font-semibold text-[#222] text-p-xs mr-3">
                White kitchen chair
              </span>

              <span className="block pt-[2px] font-medium text-[#333] text-[13px]">
                $80.000
              </span>
            </div>

            {/* Product Price */}
            <div className="">
              <span className="block text-[#666] text-p-xs">
                Curved seat with beech wood legs
              </span>
            </div>
          </div>
        </div>

        {/* Extra product Button */}
        <div className="mt-2">
          <Button
            variant="extraProduct"
            className="border border-black rounded-none w-full justify-center text-[13px] font-semibold"
          >
            AGREGAR AL CARRITO
          </Button>
        </div>
      </div>

      <div className="border border-[#dfdfdf] p-2">
        <div className="flex items-center relative">
          <div>
            <div className="w-[100px] h-[100px]">
              <Image
                src="/img-extra-children.webp"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
            </div>
          </div>

          {/* Extra item info */}
          <div className="flex flex-col ml-3 w-full">
            <div className="flex justify-between">
              <span className="block font-semibold text-[#222] text-p-xs mr-3">
                Niño extra en el cumpleaños
              </span>

              <span className="block pt-[2px] font-medium text-[#333] text-[13px]">
                $3.000
              </span>
            </div>

            {/* Product Price */}
            <div className="">
              <span className="block text-[#666] text-p-xs">
                Seis niños incluidos por defecto. Luego $3.000 c/u
              </span>
            </div>
          </div>
        </div>

        {/* Extra product Button */}
        <div className="mt-2">
          <Button
            variant="extraProduct"
            className="border border-black rounded-none w-full justify-center text-[13px] font-semibold"
          >
            AGREGAR AL CARRITO
          </Button>
        </div>
      </div>
    </div>
  );
}
