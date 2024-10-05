import Fifty from "../components/fifty/Fifty";
import Hero from "../components/Hero";
import Services from "@/components/services/Services";
import ImpactNumbers from "../components/ImpactNumbers";
import VennHome from "../components/VennHome";
import Blog from "../components/Blog";
import Brands from "../components/Brands";
import Testimonies from "@/components/testimonies/Testimonies";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyInfo } from "data/fifty";
import { blogInfo } from "data/blog";
import { homeServicesInfo } from "data/services";
import { homeBrandsInfo } from "data/brands";
import { homeImpactSectionInfo } from "data/impactNumbers";
import { homeVenn } from "data/vennSection";
import { homeTestimonies } from "data/testimonies";

export const metadata = {
  title: "ThinKey | Eventos Científicos Para Escuelas y Empresas",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero heroInfo={homeHeroInfo} />
      <Services servicesInfo={homeServicesInfo} />
      <Brands brandsInfo={homeBrandsInfo} />
      <Fifty fiftyInfo={homeFiftyInfo} />
      <Blog blogInfo={blogInfo} />
      <ImpactNumbers impactSectionInfo={homeImpactSectionInfo} />
      <VennHome data={homeVenn} sectionPadding="pb-32 pt-56 tablet-xl:pt-32" />
      <Testimonies testimoniesInfo={homeTestimonies} />
    </>
  );
}
