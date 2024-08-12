import Faq from "@/components/Faq";
import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ImpactTwo from "@/components/ImpactTwo";
import ServicesGrid from "@/components/ServicesGrid";
import Team from "@/components/Team";
import { servicesFaq } from "data/faq";
import { serviciosFiftyCards, serviciosFiftyTitleDesc } from "data/fifty";
import { empresasHeroInfo } from "data/heroInfo";
import { servicesImpactTwo } from "data/impactNumbers";
import { servicesGridBottom, servicesGridTop } from "data/services";

export default function Servicios() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
      {/* <Team /> */}
      <ImpactTwo
        data={servicesImpactTwo}
        borderColor="border-indigo-500"
        backgroundColor="bg-indigo-500"
      />
      <ServicesGrid
        servicesTop={servicesGridTop}
        servicesBottom={servicesGridBottom}
      />
      <Faq questions={servicesFaq} />
      <Fifty
        fiftyCards={serviciosFiftyCards}
        fiftyTitleDesc={serviciosFiftyTitleDesc}
      />
    </>
  );
}
