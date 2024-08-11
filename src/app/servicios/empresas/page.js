import Hero from "@/components/Hero";

import { empresasHeroInfo } from "data/heroInfo";

export default function Empresas() {
  return (
    <>
      <Hero heroInfo={empresasHeroInfo} />
    </>
  );
}
