import Fifty from "./components/Fifty";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Testimonies from "./components/Testimonies";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyCards } from "data/fifty";
import { homeServices } from "data/services";
import { homeImpactNumbers } from "data/impactNumbers";
import { homeVenn } from "data/vennSection";
import { homeTestimoniesTitle } from "data/testimonies";
import { homeTestimonies } from "data/testimonies";

export default function Home() {
  return (
    <>
      <Hero
        heroInfo={homeHeroInfo}
        headingSize="text-h1-s tablet-s:text-[3rem] desktop-s:text-[3.5rem] desktop-s:leading-[62px] desktop-l:text-[4.5rem] desktop-l:leading-[75px]"
        paddingTop="pt-0"
        firstBlobColor="bg-accent-900"
        secondBlobColor="bg-secondary-100"
        thirdBlobColor="bg-main-100"
        topBlobColor="bg-orange-500"
      />
      <Services services={homeServices} sectionPadding="desktop-l:pb-24" />
      <Fifty
        fiftyCards={homeFiftyCards}
        title="Catchy title solving the problem"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        sectionPadding="pb-36"
      />
      <ImpactNumbers
        data={homeImpactNumbers}
        sectionPadding="desktop-l:pt-24 py-14 mobile-l:py-20"
      />
      <VennHome data={homeVenn} sectionPadding="pb-32 pt-56 tablet-xl:pt-32" />
      <Testimonies
        title="Lo que opinan los colegios con los que hemos trabajado"
        testimonies={homeTestimonies}
        sectionPadding="mb-28"
      />
    </>
  );
}
