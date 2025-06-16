import React from "react";
import { useParams } from "react-router-dom";
import { departmentDetails } from "../data/departmentDetails";
import DepartmentHero from "../features/Department/DepartmentHero";
import FeatureCard from "../components/Card/TextCard";
import specialistImg from "../assets/images/specialists/specialist.png";
import { useSpecialistList } from "../hooks/useSpecialistList";
import { SpecialistSection } from "../features/Specialists/SpecialistSection";

const DepartmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const info = slug ? departmentDetails[slug] : undefined;

  const {
    titles,
    groupedAll,
    selectedTitle,
    setSelectedTitle,
    isLoading,
    isError,
  } = useSpecialistList();

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Отделение не найдено</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        Загрузка специалистов...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Ошибка загрузки специалистов
      </div>
    );
  }

  return (
    <main className="py-4">
      <DepartmentHero
        title={info.title}
        description={info.description}
        imageSrc={info.image || specialistImg}
      />

      <section className="mt-4 mx-6 lg:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.features.map((f, i) => (
            <FeatureCard key={i} text={f} />
          ))}
        </div>
      </section>

      <SpecialistSection
        titles={titles}
        grouped={groupedAll}
        selectedTitle={selectedTitle}
        onSelectTitle={(t: string) =>
          setSelectedTitle((prev) => (prev === t ? null : t))
        }
      />
    </main>
  );
};

export default DepartmentDetailPage;
