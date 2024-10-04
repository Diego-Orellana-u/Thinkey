import Image from "next/image";
import { Button } from "../ui/button";

export default function OptionalExtras({ optionalExtras }) {
  return (
    <div className="px-3 mobile-m:px-5 tablet-s:px-0 flex flex-col gap-4 mb-16">
      {optionalExtras.extrasArr.map((item) => (
        <div key={item.key} className="border border-[#dfdfdf] p-2">
          <div className="flex items-center relative">
            <div>
              <div className="w-[100px] h-[100px]">
                <Image
                  src={item.imgHref}
                  width={100}
                  height={100}
                  alt={item.imgAlt}
                  className="w-[100px] h-[100px]"
                />
              </div>
            </div>

            {/* Extra item info */}
            <div className="flex flex-col ml-3 w-full">
              <div className="flex justify-between">
                <span className="block font-semibold text-[#222] text-p-xs mr-3">
                  {item.title}
                </span>

                <span className="block pt-[2px] font-medium text-[#333] text-[13px]">
                  {item.price}
                </span>
              </div>

              {/* Product Price */}
              <div className="">
                <span className="block text-[#666] text-p-xs">{item.desc}</span>
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
      ))}
    </div>
  );
}
