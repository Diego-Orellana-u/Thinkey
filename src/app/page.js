import Fifty from "./components/Fifty";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Testimonies from "./components/Testimonies";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyCards, homeFiftyTitleDesc } from "data/fifty";
import { homeServices } from "data/services";
import { homeImpactNumbers } from "data/impactNumbers";
import { homeVenn } from "data/vennSection";
import { homeTestimoniesTitle } from "data/testimonies";
import { homeTestimonies } from "data/testimonies";

export default function Home() {
  return (
    <>
      <Hero heroInfo={homeHeroInfo} paddingTop="pt-0" />
      <Services services={homeServices} />
      <Fifty fiftyCards={homeFiftyCards} fiftyTitleDesc={homeFiftyTitleDesc} />
      <ImpactNumbers data={homeImpactNumbers} />
      <VennHome data={homeVenn} />
      <Testimonies title={homeTestimoniesTitle} testimonies={homeTestimonies} />
    </>
  );
}
