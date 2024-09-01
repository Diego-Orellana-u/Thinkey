import Product from "@/components/Product";
import { productOne } from "data/product";

export default function ProductPage() {
  return (
    <>
      <Product productInfo={productOne} />
    </>
  );
}
