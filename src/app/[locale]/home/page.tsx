import AboutUsSection from "@/components/AboutUsSection";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import MagazineSlider from "@/components/MagazineSliderSection";
import VideoSection from "@/components/VideoSection";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";
import ContactConversion from "@/components/contactConversion";
import { SustainabilitySection } from "@/components/sustainabilitySection";
import TimeLine from "@/components/timeLine";

export default async function page() {

  return (
    <div>
      <HeroSlider />
      <DiscoverSection />
      <WhatWebelieveSlider />
      <MagazineSlider />
      {/* <MagazineSection /> */}
      <TimeLine />
      <SustainabilitySection />
      {/* <BlogsSection /> */}
      {/* <ContentKeyFactsText /> */}
      <VideoSection />
      <ContactConversion />
      <AboutUsSection />
    </div>
  );
}