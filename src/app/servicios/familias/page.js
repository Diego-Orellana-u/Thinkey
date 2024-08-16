import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import HeroTwo from "@/components/HeroTwo";
import Testimonies from "@/components/Testimonies";
import { familiasFiftyCards, familiasFiftyTitleDesc } from "data/fifty";

import { familiasHeroInfo } from "data/heroInfo";
import { homeTestimonies, homeTestimoniesTitle } from "data/testimonies";

export default function Familias() {
  return (
    <>
      <HeroTwo heroInfo={familiasHeroInfo} />
      <Fifty
        fiftyCards={familiasFiftyCards}
        fiftyTitleDesc={familiasFiftyTitleDesc}
      />
      <Testimonies title={homeTestimoniesTitle} testimonies={homeTestimonies} />
    </>
  );
}
