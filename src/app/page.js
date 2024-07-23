import HomeFifty from "./components/HomeFifty";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <HomeFifty />
      <HomeServices />
    </div>
  );
}
