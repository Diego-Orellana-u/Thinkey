import Image from "next/image";
import LogoHeader from "../LogoHeader";
import OrderSummary from "./OrderSummary";
import BuyerData from "./BuyerData";
import OptionalExtras from "./OptionalExtras";
import Warning from "../Warning";
import { Button } from "../ui/button";

export default function Checkout() {
  return (
    <div>
      {/* Buyer Data */}
      <BuyerData />

      {/* Warning */}
      <div className="px-3 mobile-m:px-5 mb-10">
        <Warning text="Recuerda que son hasta 6 niños incluidos. Luego $5.000 c/u" />
      </div>

      {/* Optional Extras */}
      <OptionalExtras />

      {/* Order Summary */}
      <OrderSummary />

      <div className="mx-3 mobile-m:mx-5 pb-10">
        <Button
          variant="extraProduct"
          className="rounded-[5px] bg-[#424242] hover:bg-[#2C2C2C] w-full justify-center text-[18px] py-7 text-white font-semibold"
        >
          Comprar ahora
        </Button>
      </div>
    </div>
  );
}
