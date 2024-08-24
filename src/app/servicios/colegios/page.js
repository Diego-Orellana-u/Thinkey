import Faq from "@/components/Faq";
import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/ServicesImg";
import Testimonies from "@/components/Testimonies";
import LeadsForm from "@/components/LeadsForm";
import { servicesFaq } from "data/faq";
import { colegiosEquipoFiftyCards } from "data/fifty";

import { colegiosHeroInfo } from "data/heroInfo";
import { colegiosServices } from "data/services";
import { homeTestimonies } from "data/testimonies";

export default function Colegios() {
  return (
    <>
      <Hero
        heroInfo={colegiosHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-0"
        titlePaddingTop="pt-10"
        topBlobColor="bg-[#85388D]"
      />
      <Fifty
        fiftyCards={colegiosEquipoFiftyCards}
        sectionPadding="pb-20"
        title="Conoce al Equipo Detrás de THINKey"
        desc="Somos un equipo apasionado por la educación STEAM, liderado por expertos en ciencia y tecnología, dedicados a transformar la manera en que los niños y jóvenes aprenden."
      />
      <ServicesImg
        data={colegiosServices}
        sectionPadding="py-20"
        title="Aventuras educativas con nuestros Bootcamps cientificos"
      />
      <Testimonies
        title="Opiniones de los colegios con los que hemos trabajado"
        testimonies={homeTestimonies}
        sectionPadding="pt-20 pb-32"
      />
      <Faq questions={servicesFaq} />
      <LeadsForm sectionPadding="py-20" />
    </>
  );
}
