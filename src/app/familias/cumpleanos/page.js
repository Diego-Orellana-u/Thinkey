import Faq from "@/components/Faq";
import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import Testimonies from "@/components/Testimonies";
import PureTextOne from "@/components/PureTextOne";
import { servicesFaq } from "data/faq";
import { cumpleañosFiftyCards } from "data/fifty";

import { cumpleañosHeroInfo } from "data/heroInfo";
import { homeTestimonies } from "data/testimonies";

export default function Cumpleanos() {
  return (
    <>
      <Hero
        heroInfo={cumpleañosHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-12"
        topBlobColor="bg-orange-500"
        headingWidth="desktop-s:w-[580px] desktop-l:w-[630px]"
        separatedHeadingDisplay="mobile-m:block"
      />
      <PureTextOne sectionPadding="py-20 desktop-s:py-32" sectionMargin="" />
      <Fifty
        fiftyCards={cumpleañosFiftyCards}
        sectionPadding="pt-16 pb-20"
        title="Paquetes de Cumpleaños Científicos"
        desc=""
      />
      <Testimonies
        testimonies={homeTestimonies}
        sectionPadding="pt-20 pb-32"
        title="Lo Que Dicen Los Padres y Niños De Nuestros Cumpleaños"
      />
      <Faq
        desc="Descripción que introduzca los puntos de dolor al momento de contratar cumpleaños y como las preguntas los pueden aliviar"
        questions={servicesFaq}
        title="Preguntas Frecuentes"
      />
    </>
  );
}
