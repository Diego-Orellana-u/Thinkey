import Faq from "@/components/faq/Faq";
import Fifty from "@/components/fifty/Fifty";
import Hero from "@/components/Hero";
import Testimonies from "@/components/testimonies/Testimonies";
import OnlyTextOne from "@/components/onlytext/OnlyTextOne";
import { familiasCumpleañosFaq } from "data/faq";
import { cumpleañosFiftyInfo } from "data/fifty";
import { onlyTextCumpleaños } from "data/onlyText";

import { cumpleañosHeroInfo } from "data/heroInfo";
import { familiasCumpleañosTestimonies } from "data/testimonies";

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
      <OnlyTextOne onlyTextInfo={onlyTextCumpleaños} />
      <Fifty fiftyInfo={cumpleañosFiftyInfo} />
      <Testimonies testimoniesInfo={familiasCumpleañosTestimonies} />
      <Faq faqInfo={familiasCumpleañosFaq} />
    </>
  );
}
