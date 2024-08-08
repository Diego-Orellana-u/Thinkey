import HomeFifty from "./components/HomeFifty";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Testimonies from "./components/Testimonies";
import Footerb from "./components/Footerb";
import { homeHeroInfo } from "data/heroInfo";
import { homeFiftyCards, homeFiftyTitleDesc } from "data/fifty";
import { homeServices } from "data/services";
import { homeImpactNumbers } from "data/impactNumbers";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero heroInfo={homeHeroInfo} />
      <HomeFifty
        fiftyCards={homeFiftyCards}
        fiftyTitleDesc={homeFiftyTitleDesc}
      />
      <HomeServices services={homeServices} />
      <ImpactNumbers data={homeImpactNumbers} />
      <VennHome />
      <Testimonies />
      <Footerb />
    </div>
  );
}
