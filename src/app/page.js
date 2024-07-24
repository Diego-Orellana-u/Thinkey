import HomeFifty from "./components/HomeFifty";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import ImpactNumbers from "./components/ImpactNumbers";
import VennHome from "./components/VennHome";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <HomeFifty />
      <HomeServices />
      <ImpactNumbers />
      <VennHome />
    </div>
  );
}
