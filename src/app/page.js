import Fifty from "./components/fifty/Fifty";
import Hero from "./components/Hero";
import Services from "@/components/services/Services";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Blog from "./components/Blog";
import Testimonies from "@/components/testimonies/Testimonies";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyInfo } from "data/fifty";
import { blogInfo } from "data/blog";
import { homeServicesInfo } from "data/services";
import { homeImpactSectionInfo } from "data/impactNumbers";
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
      <Services servicesInfo={homeServicesInfo} />
      <Fifty fiftyInfo={homeFiftyInfo} />
      <Blog blogInfo={blogInfo} />
      <ImpactNumbers impactSectionInfo={homeImpactSectionInfo} />
      <VennHome data={homeVenn} sectionPadding="pb-32 pt-56 tablet-xl:pt-32" />
      <Testimonies testimoniesInfo={homeTestimonies} />
    </>
  );
}
