import BlogsSlider from "@/components/blogsSection";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import MagazineSection from "@/components/magazineSection";
import SustainabilitySection from "@/components/sustainabilitySection";
import WhatWebelieveSlider from "@/components/WhatWebelieveSection";

export default async function Home() {

  return (
    <div>
      <HeroSlider />
      <DiscoverSection />
      <WhatWebelieveSlider />
      <MagazineSection />
      <SustainabilitySection />
      <BlogsSlider />
    </div>
  );
}
