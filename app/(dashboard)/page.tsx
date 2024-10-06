import { Banner } from "@/components/sections/Banner";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <Banner />
      <PricingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
