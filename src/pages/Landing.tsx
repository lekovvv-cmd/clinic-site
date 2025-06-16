import React from "react";
import Hero from "../features/Landing/Hero";
import MapSection from "../components/Map/MapSection";
import DirectionsSection from "../features/Direction/DirectionsSection";
import SpecialistsSection from "../features/Specialists/SpecialistsCarouselSection";
import StatsSection from "../features/Landing/StatsSection";

const Landing: React.FC = () => (
  <main>
    <Hero />git remote add origin https://github.com/lekovvv-cmd/clinic-site.git
git add .
git commit -m "init"
git push -u origin main

    <SpecialistsSection />
    <DirectionsSection />
    <StatsSection />
    <MapSection />
  </main>
);

export default Landing;
