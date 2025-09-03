import Footer from "@/app/footer/Footer";
import AboutUsSection from "@/components/AboutUsSection";
import ContentKeyFactsText from "@/components/ContentKeyFactsText";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import VideoSection from "@/components/VideoSection";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";
import Header from "../header/Header";
import { MagazineSection } from "@/components/magazineSection";
import { SustainabilitySection } from "@/components/sustainabilitySection";
import { BlogsSection } from "@/components/blogsSection";

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
