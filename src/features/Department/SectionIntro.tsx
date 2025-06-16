import React from "react";

type SectionIntroProps = {
  title: string;
  subtitle?: string;
};

const SectionIntro: React.FC<SectionIntroProps> = ({ title, subtitle }) => (
  <section className="py-4 px-4">
    <div className="max-w-7xl">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{title}</h1>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  </section>
);

export default SectionIntro;
