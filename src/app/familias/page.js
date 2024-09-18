import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/services/ServicesImg";
import Testimonies from "@/components/testimonies/Testimonies";
import { familiasFiftyInfo } from "data/fifty";

import { familiasHeroInfo } from "data/heroInfo";
import { familiasServicesInfo } from "data/services";
import { familiasTestimonies } from "data/testimonies";

export const metadata = {
  title: "Servicios Para Familias | Cumpleaños Científicos",
  description: "",
};

export default function Familias() {
  return (
    <>
      <Hero heroInfo={familiasHeroInfo} />
      <Fifty fiftyInfo={familiasFiftyInfo} />
      <ServicesImg servicesInfo={familiasServicesInfo} />
      <Testimonies testimoniesInfo={familiasTestimonies} />
    </>
  );
}
