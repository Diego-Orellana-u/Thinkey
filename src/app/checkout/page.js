import Checkout from "@/components/checkout/Checkout";
import { optionalExtras } from "data/optionalExtras";

export default function PageCheckout() {
  return (
    <>
      <Checkout optionalExtras={optionalExtras} />
    </>
  );
}
