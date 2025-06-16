import React from "react";
import StatCard from "../../components/Card/StatsOverviewCard";

const StatsSection: React.FC = () => (
  <div className="w-full bg-white rounded-2xl p-6 sm:p-8 -m-2">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
          Медицинская помощь экспертного уровня взрослым и детям с первых дней
          жизни
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <StatCard
          variant="highlight"
          title="> 16 000 пациентов"
          subtitle="Мы принимаем пациентов ежегодно. Нас выбирают даже самые требовательные."
        />
        <StatCard
          variant="tags"
          subtitle="В нашем многопрофильном центре представлены все основные направления:"
          tags={[
            "УЗИ",
            "Суточное мониторирование",
            "ЭКГ",
            "ЭЭГ",
            "Гастро- и колоноскопия «во сне»",
            "Полисомнография",
            "и другие",
          ]}
          className="row-span-2"
        />
        <StatCard
          variant="info"
          title="Собственная лаборатория"
          subtitle="Которая участвует в системе контроля качества (ФСВОК)."
          className="row-start-2"
        />
      </div>
    </div>
  </div>
);

export default StatsSection;
