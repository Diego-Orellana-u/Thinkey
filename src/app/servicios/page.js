import Faq from "@/components/Faq";
import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import { servicesFaq } from "data/faq";
import { serviciosFiftyCards, serviciosFiftyTitleDesc } from "data/fifty";

import { empresasHeroInfo } from "data/heroInfo";

export default function Servicios() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
      <ServicesGrid />
      <Faq questions={servicesFaq} />
      <Fifty
        fiftyCards={serviciosFiftyCards}
        fiftyTitleDesc={serviciosFiftyTitleDesc}
      />
    </>
  );
}
