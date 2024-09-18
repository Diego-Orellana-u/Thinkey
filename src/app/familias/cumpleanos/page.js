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

export const metadata = {
  title: "Cumpleaños Científicos | Celebraciones científicas para niños",
  description: "",
};

export default function Cumpleanos() {
  return (
    <>
      <Hero heroInfo={cumpleañosHeroInfo} />
      <OnlyTextOne onlyTextInfo={onlyTextCumpleaños} />
      <Fifty fiftyInfo={cumpleañosFiftyInfo} />
      <Testimonies testimoniesInfo={familiasCumpleañosTestimonies} />
      <Faq faqInfo={familiasCumpleañosFaq} />
    </>
  );
}
