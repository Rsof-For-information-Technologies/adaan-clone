import BlogsSlider from "@/components/blogsSection";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import MagazineSection from "@/components/magazineSection";
import SustainabilitySection from "@/components/sustainabilitySection";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";
import ContentKeyFactsText from "@/components/ContentKeyFactsText";
import VideoSection from "@/components/VideoSection";
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/app/footer/Footer";
import Header from "../header/Header";
export default async function Home() {

  return (
    <div>
      <Header />
      <HeroSlider />
      <DiscoverSection />
      <WhatWebelieveSlider />
      <MagazineSection />
      <SustainabilitySection />
      <BlogsSlider />
      <ContentKeyFactsText />
      <VideoSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
