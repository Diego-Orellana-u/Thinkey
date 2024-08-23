import Faq from "@/components/Faq";
import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ImpactTwo from "@/components/ImpactTwo";
import ServicesGrid from "@/components/ServicesGrid";
import Team from "@/components/Team";
import { servicesFaq } from "data/faq";
import { serviciosFiftyCards } from "data/fifty";
import { empresasHeroInfo } from "data/heroInfo";
import { servicesImpactTwo } from "data/impactNumbers";
import { servicesGridBottom, servicesGridTop } from "data/services";

export default function Servicios() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
      <ImpactTwo
        data={servicesImpactTwo}
        borderColor="border-indigo-500"
        backgroundColor="bg-indigo-500"
        title="Otra sección de estadisticas"
        desc="Our platform is trusted by organizations worldwide to boost
            productivity, streamline operations, and enhance customer
            experiences."
        sectionPadding="pt-0"
      />
      <ServicesGrid
        servicesTop={servicesGridTop}
        servicesBottom={servicesGridBottom}
        title="Aventuras educativas con Bootcamps STEAM"
        sectionPadding="pt-24"
      />
      <Faq questions={servicesFaq} sectionPadding="pb-10" />
      <Fifty fiftyCards={serviciosFiftyCards} />
    </>
  );
}
