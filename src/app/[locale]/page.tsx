import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";
import ContentKeyFactsText from "@/components/ContentKeyFactsText";
import VideoSection from "@/components/VideoSection";
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/app/footer/Footer";
import Header from "../header/Header";
import MagazineSection from "@/components/MagazineSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import BlogsSlider from "@/components/BlogsSection";

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

