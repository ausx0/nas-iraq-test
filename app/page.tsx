import AboutUs from "./components/Home/AboutUs";
import CompanyPhilosophy from "./components/Home/CompanyPhilosophy";
import Hero from "./components/Home/Hero";
import News from "./components/Home/News";
import OurCharts from "./components/Home/OurCharts";
import OurPartners from "./components/Home/OurPartners";
import OurService from "./components/Home/OurService";
import Pricing from "./components/Home/Pricing";
import CarouselHomePage from "./components/Home/CarouselHomePage";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 ">
      <Hero />
      <OurPartners />
      <div className="flex flex-col gap-14 mobile-lines">
        <AboutUs />
        <OurService />
      </div>
      <CompanyPhilosophy />
      <OurCharts />
      <News />

      <Pricing />

      <CarouselHomePage />
    </div>
  );
}
