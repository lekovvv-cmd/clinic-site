import React from "react";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";

const TopFeaturesSection: React.FC = () => (
  <section className="py-2 px-2 sm:px-4">
    <div className="max-w-none px-4 sm:px-6 lg:px-8 mx-auto">
      <StatsSection />
      <FeaturesSection />
    </div>
  </section>
);

export default TopFeaturesSection;
