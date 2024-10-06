import OrderSummary from "./OrderSummary";
import BuyerData from "./BuyerData";
import OptionalExtras from "./OptionalExtras";
import Warning from "../Warning";
import { Button } from "../ui/button";
import LogoHeader from "../LogoHeader";

export default function Checkout({ optionalExtras }) {
  return (
    <div className="relative flex flex-col desktop-s:justify-center desktop-s:gap-10 desktop-s:flex-row items-center desktop-s:items-stretch">
      <div className="tablet-s:w-[528px] pt-5 desktop-s:pt-16 desktop-s:w-[650px] desktop-s:pl-10 desktop-s:items-end desktop-s:flex desktop-s:flex-col desktop-s:flex-[1_1_40%]">
        <div className="desktop-s:w-[600px] desktop-s:pl-10">
          <div className="mb-7 desktop-s:mb-12">
            <LogoHeader position="flex justify-center" />
          </div>
          {/* Buyer Data */}
          <BuyerData />

          {/* Warning */}
          <div className="px-3 mobile-m:px-5 tablet-s:px-0 tablet-s:w-full mb-10">
            <Warning text="Recuerda que son hasta 6 niños incluidos. Luego $5.000 c/u" />
          </div>

          {/* Optional Extras */}
          <OptionalExtras optionalExtras={optionalExtras} />
        </div>
      </div>

      <div className="desktop-s:px-10 w-full desktop-s:w-auto pt-10 desktop-s:pt-0 relative border border-gray-300/20 bg-gray-200/45 desktop-s:flex-[1_1_40%]">
        <div className="tablet-s:max-w-[528px] desktop-s:max-w-[480px] my-0 mx-auto desktop-s:mx-0 sticky top-16">
          {/* Order Summary */}
          <OrderSummary />

          <div className="mx-3 mobile-m:mx-5 tablet-s:mx-0 pb-10">
            <Button
              variant="extraProduct"
              className="rounded-[5px] bg-[#424242] hover:bg-[#2C2C2C] w-full justify-center text-[18px] py-7 text-white font-semibold"
            >
              Pagar ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
