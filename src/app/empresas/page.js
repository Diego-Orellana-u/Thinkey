import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/services/ServicesImg";
import Testimonies from "@/components/testimonies/Testimonies";
import { empresasFiftyInfo } from "data/fifty";
import { empresasHeroInfo } from "data/heroInfo";
import { colegiosServicesInfo } from "data/services";
import { empresasTestimonies } from "data/testimonies";

export const metadata = {
  title: "Servicios Para Empresas | Eventos y Experiencias Científicas",
  description: "",
};

export default function Empresas() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
      <Fifty fiftyInfo={empresasFiftyInfo} />
      <ServicesImg servicesInfo={colegiosServicesInfo} />
      <Testimonies testimoniesInfo={empresasTestimonies} />
    </>
  );
}
