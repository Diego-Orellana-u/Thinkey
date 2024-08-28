import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/ServicesImg";
import Testimonies from "@/components/Testimonies";
import { familiasFiftyCards } from "data/fifty";

import { familiasHeroInfo } from "data/heroInfo";
import { familiasServices } from "data/services";
import { homeTestimonies } from "data/testimonies";

export default function Familias() {
  return (
    <>
      <Hero
        heroInfo={familiasHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-12"
        topBlobColor="bg-orange-500"
        headingWidth="desktop-s:w-[580px] desktop-l:w-[630px]"
        separatedHeadingDisplay="mobile-m:block"
      />
      <Fifty
        fiftyCards={familiasFiftyCards}
        sectionPadding="pb-20"
        title="Cumpleaños Científicos"
        desc="Convierte la próxima fiesta de cumpleaños en una aventura científica. Nuestros cumpleaños científicos combinan la magia del aprendizaje con la diversión, permitiendo que los niños descubran la ciencia a través de experimentos interactivos y emocionantes."
      />
      <ServicesImg
        data={familiasServices}
        sectionPadding="py-20"
        title="Aventuras educativas con nuestros Bootcamps cientificos"
      />
      <Testimonies
        title="Las experiencias de los colegios con los que hemos trabajado"
        testimonies={homeTestimonies}
        sectionPadding="pt-20 pb-32"
      />
    </>
  );
}
