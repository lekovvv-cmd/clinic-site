import React from "react";
import { StatCard } from "../../components/Card/StatCard";

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: ">50 000",
      label: "обращений в год",
      description:
        "Масштабная нагрузка, отражающая высокий уровень доверия пациентов и востребованность медицинского учреждения",
      highlight: true,
    },
    {
      value: "7500+",
      label: "ультразвуковых исследований в год",
      description:
        "Современная диагностика, обеспечивающая точную и оперативную постановку диагноза",
    },
    {
      value: "1000+",
      label: "эндоскопических исследований и манипуляций в год",
      description:
        "Широкий спектр лечебно-диагностических процедур для выявления и лечения заболеваний ЖКТ и других систем",
    },
  ];

  return (
    <section className="py-16" id="stats">
      <h2 className="text-3xl font-bold mb-12 mx-5">Заботимся о вас</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6 px-6">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            value={item.value}
            label={item.label}
            description={item.description}
            highlight={item.highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
