import Footer from "@/app/footer/Footer";
import AboutUsSection from "@/components/AboutUsSection";
import { BlogsSection } from "@/components/BlogsSection";
import ContentKeyFactsText from "@/components/ContentKeyFactsText";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import { MagazineSection } from "@/components/MagazineSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import VideoSection from "@/components/VideoSection";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";
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
      <BlogsSection />
      <ContentKeyFactsText />
      <VideoSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
