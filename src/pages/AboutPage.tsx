import React from "react";
import TopFeaturesSection from "../features/About/TopFeaturesSection";
import TrustSection from "../features/About/TrustSection";

const AboutPage: React.FC = () => {
  return (
    <main className="space-y-16 my-2">
      <TopFeaturesSection />
      <TrustSection />
    </main>
  );
};

export default AboutPage;
