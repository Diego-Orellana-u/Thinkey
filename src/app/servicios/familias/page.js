import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import HeroTwo from "@/components/HeroTwo";
import ServicesImg from "@/components/ServicesImg";
import Testimonies from "@/components/Testimonies";
import { familiasFiftyCards } from "data/fifty";

import { familiasHeroInfo } from "data/heroInfo";
import { familiasServices } from "data/services";
import { homeTestimonies, homeTestimoniesTitle } from "data/testimonies";

export default function Familias() {
  return (
    <>
      <Hero
        heroInfo={familiasHeroInfo}
        headingSize="desktop-s:text-[4.5rem] desktop-s:leading-[75px]"
        gradientClass="family-hero-gradient"
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
        title={homeTestimoniesTitle}
        testimonies={homeTestimonies}
        sectionPadding="pt-20 pb-32"
      />
    </>
  );
}
