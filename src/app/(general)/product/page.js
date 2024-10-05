import Product from "@/components/Product";
import Faq from "@/components/faq/Faq";
import Testimonies from "@/components/testimonies/Testimonies";

import { productOne } from "data/product";
import { productsTestimonies } from "data/testimonies";
import { servicesFaq } from "data/faq";
import FiftyTwo from "../../components/fifty/FiftyTwo";
import { productFiftyTwoInfo } from "data/fifty";
import OnlyTextOne from "@/components/onlytext/OnlyTextOne";
import { onlyTextProduct } from "data/onlyText";

export default function ProductPage() {
  return (
    <>
      <Product productInfo={productOne} />
      <OnlyTextOne onlyTextInfo={onlyTextProduct} />
      <FiftyTwo fiftyTwoInfo={productFiftyTwoInfo} />
      <Testimonies testimoniesInfo={productsTestimonies} />
      <Faq faqInfo={servicesFaq} />
    </>
  );
}
