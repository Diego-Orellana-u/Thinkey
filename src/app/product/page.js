import Product from "@/components/Product";
import Faq from "@/components/Faq";
import Testimonies from "@/components/Testimonies";

import { productOne } from "data/product";
import { productsTestimonies } from "data/testimonies";
import { servicesFaq } from "data/faq";

export default function ProductPage() {
  return (
    <>
      <Product productInfo={productOne} />
      <Testimonies testimoniesInfo={productsTestimonies} />
      <Faq faqInfo={servicesFaq} />
    </>
  );
}
