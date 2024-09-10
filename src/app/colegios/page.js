import Faq from "@/components/faq/Faq";
import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import ServicesImg from "@/components/services/ServicesImg";
import Testimonies from "@/components/testimonies/Testimonies";
import LeadsForm from "@/components/LeadsForm";
import { servicesFaq } from "data/faq";
import { colegiosEquipoFiftyInfo } from "data/fifty";

import { colegiosHeroInfo } from "data/heroInfo";
import { colegiosServicesInfo } from "data/services";
import { colegiosFormInfo } from "data/forms";
import { colegiosTestimonies } from "data/testimonies";

export default function Colegios() {
  return (
    <>
      <Hero
        heroInfo={colegiosHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-12"
        titlePaddingTop="pt-10"
        topBlobColor="bg-[#85388D]"
        headingWidth="desktop-s:w-[580px] desktop-l:w-[630px]"
        separatedHeadingDisplay="mobile-m:block" //this is to adjust the gradient heading depending on the length. Switch between inline and block. If you are using inline, add ml-[14px].
      />
      <Fifty fiftyInfo={colegiosEquipoFiftyInfo} />
      <ServicesImg servicesInfo={colegiosServicesInfo} />
      <LeadsForm formInfo={colegiosFormInfo} />
      <Testimonies testimoniesInfo={colegiosTestimonies} />
      <Faq faqInfo={servicesFaq} />
    </>
  );
}
