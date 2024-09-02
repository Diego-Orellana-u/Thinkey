import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/ServicesImg";
import Testimonies from "@/components/Testimonies";
import { empresasFiftyInfo } from "data/fifty";
import { empresasHeroInfo } from "data/heroInfo";
import { colegiosServices } from "data/services";
import { empresasTestimonies } from "data/testimonies";

export default function Empresas() {
  return (
    <>
      <Hero
        heroInfo={empresasHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-12"
        titlePaddingTop="pt-10"
        topBlobColor="bg-secondary-100"
        headingWidth="desktop-s:w-[580px] desktop-l:w-[630px]"
        separatedHeadingDisplay="mobile-m:block"
      />
      <Fifty fiftyInfo={empresasFiftyInfo} />
      <ServicesImg
        data={colegiosServices}
        sectionPadding="py-20"
        title="Aventuras educativas con nuestros Bootcamps cientificos"
      />
      <Testimonies testimoniesInfo={empresasTestimonies} />
    </>
  );
}
