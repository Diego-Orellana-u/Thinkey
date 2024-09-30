import Image from "next/image";
import LogoHeader from "../LogoHeader";
import OrderSummary from "./OrderSummary";
import BuyerData from "./BuyerData";

export default function Checkout() {
  return (
    <div>
      {/* Buyer Data */}
      <BuyerData />

      {/* Order Summary */}
      <OrderSummary />
    </div>
  );
}
