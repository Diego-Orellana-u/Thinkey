import OrderSummary from "./OrderSummary";
import BuyerData from "./BuyerData";
import OptionalExtras from "./OptionalExtras";
import Warning from "../Warning";
import { Button } from "../ui/button";

export default function Checkout({ optionalExtras }) {
  return (
    <div className="relative flex flex-col desktop-s:justify-center desktop-s:gap-10 desktop-s:flex-row items-center desktop-s:items-stretch">
      <div className="tablet-s:w-[528px] desktop-s:pl-10 desktop-s:items-end desktop-s:flex desktop-s:flex-col desktop-s:flex-[1_1_40%]">
        <div className="desktop-s:w-[528px] desktop-s:pl-10">
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

      <div className="desktop-s:px-10 relative bg-gray-200 desktop-s:flex-[1_1_40%]">
        <div className="tablet-s:max-w-[528px] sticky top-28">
          {/* Order Summary */}
          <OrderSummary />

          <div className="mx-3 mobile-m:mx-5 tablet-s:mx-0 pb-10">
            <Button
              variant="extraProduct"
              className="rounded-[5px] bg-[#424242] hover:bg-[#2C2C2C] w-full justify-center text-[18px] py-7 text-white font-semibold"
            >
              Comprar ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
