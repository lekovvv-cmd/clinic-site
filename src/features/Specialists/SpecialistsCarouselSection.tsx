import React from "react";
import { useGetSpecialistsQuery } from "../../services/specialistsApi";
import { SpecialistsCarousel } from "./SpecialistsCarousel";
import type { Doctor } from "../../types";

const SpecialistsSection: React.FC = () => {
  const { data: doctors = [], isLoading } = useGetSpecialistsQuery();

  return (
    <section className="py-16 rounded-2xl my-2 w-full">
      <div className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Наши специалисты</h2>
        </div>
        {isLoading ? (
          <p className="text-center font-bold">Загрузка...</p>
        ) : (
          <SpecialistsCarousel specialists={doctors as Doctor[]} />
        )}
      </div>
    </section>
  );
};

export default SpecialistsSection;
