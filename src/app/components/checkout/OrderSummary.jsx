import Image from "next/image";

export default function OrderSummary() {
  return (
    <div className="px-3 mobile-m:px-5 tablet-s:px-0 pb-10 ">
      <span className="font-semibold text-p-xl text-[#444] mb-3 block ">
        Resumen De La Compra
      </span>

      {/* Order Summary Product Container */}
      <div className="flex flex-col gap-4">
        {/* Product 2 */}
        <div className="flex items-center justify-between gap-1 mobile-m:gap-5">
          <div className="flex items-center">
            {/* Product Image */}
            <div className="relative w-16">
              <Image
                src="/shopify-test.png"
                width={50}
                height={50}
                className="w-full rounded-[7px] border-gray-300/60 border"
              />
              <div className="absolute -top-2 -right-2 rounded-full bg-gray-300 w-5 h-5 flex items-center justify-center text-white">
                <span className="text-[12px]">1</span>
              </div>
            </div>

            {/* Product Data */}
            <div className="ml-4">
              <span className="block font-medium text-[#333] text-p-xs">
                White kitchen chair
              </span>
              <span className="block text-[#666] text-[12px]">
                Curved seat with beech wood legs
              </span>
            </div>
          </div>

          {/* Product Price */}
          <div className="relative right-0">
            <span className="block font-medium text-[#333] text-[15px]">
              $80.000
            </span>
          </div>
        </div>
        {/* Product 1 */}
        <div className="flex items-center justify-between gap-1 mobile-m:gap-5">
          <div className="flex items-center">
            {/* Product Image */}
            <div className="relative w-16">
              <Image
                src="/shopify-test.png"
                width={50}
                height={50}
                className="w-full rounded-[7px] border-gray-300/60 border"
              />
              <div className="absolute -top-2 -right-2 rounded-full bg-gray-300 w-5 h-5 flex items-center justify-center text-white">
                <span className="text-[12px]">1</span>
              </div>
            </div>

            {/* Product Data */}
            <div className="ml-4">
              <span className="block font-medium text-[#333] text-p-xs">
                White kitchen chair
              </span>
              <span className="block text-[#666] text-[12px]">
                Curved seat with beech wood legs
              </span>
            </div>
          </div>

          {/* Product Price */}
          <div className="relative right-0">
            <span className="block font-medium text-[#333] text-[15px]">
              $80.000
            </span>
          </div>
        </div>
      </div>

      {/* Order Summary Info */}
      <div className="flex flex-col mt-4 gap-2">
        <div className="flex justify-between items-center">
          <span className="block text-[15px]">Subtotal</span>
          <span className="block font-medium text-[#222] text-[15px]">
            $230.00
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="block text-[15px]">Shipping</span>
          <span className="block font-medium text-[#222] text-[15px]">
            $8.62
          </span>
        </div>

        <div className="flex justify-between mt-1 text-[#333] font-medium items-center">
          <span className="block text-p-l">Total</span>
          <span className="block text-p-l">$249.00</span>
        </div>
      </div>
    </div>
  );
}
