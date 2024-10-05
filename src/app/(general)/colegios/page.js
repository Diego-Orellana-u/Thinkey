import Faq from "@/components/faq/Faq";
import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/services/ServicesImg";
import Testimonies from "@/components/testimonies/Testimonies";
import LeadsForm from "@/components/LeadsForm";
import { servicesFaq } from "data/faq";
import { colegiosEquipoFiftyInfo } from "data/fifty";

import { colegiosHeroInfo } from "data/heroInfo";
import { ctaColegios } from "data/cta";
import { colegiosServicesInfo } from "data/services";
import { colegiosFormInfo } from "data/forms";
import { colegiosTestimonies } from "data/testimonies";
import Cta from "../../components/Cta";

export const metadata = {
  title: "Servicios Para Colegios | Ferias Científicas",
  description: "",
};

export default function Colegios() {
  return (
    <>
      <Hero heroInfo={colegiosHeroInfo} />
      <Fifty fiftyInfo={colegiosEquipoFiftyInfo} />
      <ServicesImg servicesInfo={colegiosServicesInfo} />
      <LeadsForm formInfo={colegiosFormInfo} />
      <Faq faqInfo={servicesFaq} />
      <Testimonies testimoniesInfo={colegiosTestimonies} />
      <Cta ctaInfo={ctaColegios} />
    </>
  );
}
