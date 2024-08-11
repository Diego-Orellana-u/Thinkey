import Hero from "@/components/Hero";

import { empresasHeroInfo } from "data/heroInfo";

export default function Servicios() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
    </>
  );
}
