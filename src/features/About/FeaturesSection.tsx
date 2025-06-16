import React from "react";
import FeatureCard from "../../components/Card/FeatureCard";

const featureTexts = [
  `Продолжительные приёмы — мы уделяем достаточно времени каждому пациенту, приём длится до 50–60 минут`,
  `Отсутствие гипердиагностики — мы заботимся о вашем здоровье, вы не получите ненужные процедуры`,
  `Отсутствие очередей — у нас отсутствует поток пациентов, вам не придётся ждать своего приёма`,
];

const FeaturesSection: React.FC = () => (
  <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
    {featureTexts.map((text) => (
      <FeatureCard key={text}>{text}</FeatureCard>
    ))}
  </div>
);

export default FeaturesSection;
