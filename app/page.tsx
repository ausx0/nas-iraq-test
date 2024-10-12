import AboutUs from "./components/Home/AboutUs";
import CompanyPhilosophy from "./components/Home/CompanyPhilosophy";
import Hero from "./components/Home/Hero";
import OurCharts from "./components/Home/OurCharts";
import OurPartners from "./components/Home/OurPartners";
import OurService from "./components/Home/OurService";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <OurPartners />
      <div className="flex flex-col gap-14 mobile-lines">
        <AboutUs />
        <OurService />
      </div>
      <CompanyPhilosophy />
      <OurCharts />
    </div>
  );
}
