import HomeFifty from "./components/HomeFifty";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";
import Testimonies from "./components/Testimonies";
import Footerb from "./components/Footerb";
import { heroInfo, heroInfo2 } from "data/heroInfo";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero heroInfo={heroInfo2} />
      <HomeFifty />
      <HomeServices />
      <ImpactNumbers />
      <VennHome />
      <Testimonies />
      <Footerb />
    </div>
  );
}
