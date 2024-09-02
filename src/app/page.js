import Fifty from "./components/Fifty";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Testimonies from "./components/Testimonies";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyInfo } from "data/fifty";
import { homeServices } from "data/services";
import { homeImpactNumbers } from "data/impactNumbers";
import { homeVenn } from "data/vennSection";
import { homeTestimonies } from "data/testimonies";

export default function Home() {
  return (
    <>
      <Hero
        heroInfo={homeHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-12"
        firstBlobColor="bg-main-200/50"
        secondBlobColor="bg-secondary-100/30"
        thirdBlobColor="bg-main-100/50"
        topBlobColor="bg-purple-100"
      />
      <Services services={homeServices} sectionPadding="desktop-l:pb-24" />
      <Fifty fiftyInfo={homeFiftyInfo} />
      <ImpactNumbers
        data={homeImpactNumbers}
        sectionPadding="desktop-l:pt-24 py-14 mobile-l:py-20"
      />
      <VennHome data={homeVenn} sectionPadding="pb-32 pt-56 tablet-xl:pt-32" />
      <Testimonies testimoniesInfo={homeTestimonies} />
    </>
  );
}
