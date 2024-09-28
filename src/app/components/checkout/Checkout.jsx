import Image from "next/image";
import LogoHeader from "../LogoHeader";

export default function Checkout() {
  return (
    <div>
      {/* Contact component */}
      <div>
        <div>
          <span>Contacto</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-5">
        <span className="font-semibold text-p-xl text-[#444] mb-3 block ">
          Order Summary
        </span>

        <div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
