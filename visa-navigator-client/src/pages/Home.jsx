import CountriesSection from "../components/CountriesSection";
import FAQ from "../components/FAQ";
import LatestVisas from "../components/LatestVisas";
import Newsletter from "../components/Newsletter";
import PartnerPrograms from "../components/PartnerPrograms";
import Slider from "../components/Slider";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import VisaHighlights from "../components/VisaHighlights";





export default function Home() {
  return (
    <div className="grid gap-10">
      <Slider/>
      <LatestVisas/>

      <CountriesSection/>
      <VisaHighlights/>
      <TeamSection/>
      <PartnerPrograms/>
      
      <Testimonials/>
      <FAQ/>
      <Newsletter/>
    </div>
  );
}
