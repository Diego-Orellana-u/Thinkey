import Fifty from "@/components/Fifty";
import Hero from "@/components/Hero";
import { serviciosFiftyCards, serviciosFiftyTitleDesc } from "data/fifty";

import { empresasHeroInfo } from "data/heroInfo";

export default function Servicios() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
      <Fifty
        fiftyCards={serviciosFiftyCards}
        fiftyTitleDesc={serviciosFiftyTitleDesc}
      />
    </>
  );
}
