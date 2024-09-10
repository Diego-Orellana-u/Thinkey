import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/services/ServicesImg";
import Testimonies from "@/components/testimonies/Testimonies";
import { familiasFiftyInfo } from "data/fifty";

import { familiasHeroInfo } from "data/heroInfo";
import { familiasServicesInfo } from "data/services";
import { familiasTestimonies } from "data/testimonies";

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
      <Fifty fiftyInfo={familiasFiftyInfo} />
      <ServicesImg servicesInfo={familiasServicesInfo} />
      <Testimonies testimoniesInfo={familiasTestimonies} />
    </>
  );
}
