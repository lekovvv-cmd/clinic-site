import React from "react";
import Hero from "../features/Landing/Hero";
import MapSection from "../components/Map/MapSection";
import DirectionsSection from "../features/Direction/DirectionsSection";
import SpecialistsSection from "../features/Specialists/SpecialistsCarouselSection";
import StatsSection from "../features/Landing/StatsSection";

const Landing: React.FC = () => (
  <main>
    <Hero />
    <SpecialistsSection />
    <DirectionsSection />
    <StatsSection />
    <MapSection />
  </main>
);

export default Landing;
