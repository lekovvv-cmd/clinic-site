import React, { useState, useMemo } from "react";
import { useSpecialistList } from "../hooks/useSpecialistList";
import { SpecialistSearchBar } from "../features/Specialists/Navigation/SpecialistSearchBar";
import { SpecialistTitleScroller } from "../features/Specialists/Navigation/SpecialistTitleScroller";
import { DoctorCard } from "../components/Card/DoctorCard";
import { ModalDoctorInfo } from "../components/Modal/ModalDoctorInfo";
import type { Doctor } from "../types";

const CARD_WIDTH = 450;
const CARD_HEIGHT = 550;

const SpecialistsPage: React.FC = () => {
  const {
    titles,
    groupedAll,
    selectedTitle,
    setSelectedTitle,
    isLoading,
    isError,
  } = useSpecialistList();

  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredGrouped = useMemo(() => {
    const allDoctors: Doctor[] = Object.values(groupedAll).flat();

    const bySearch = allDoctors.filter((d) =>
      d.title.toLowerCase().includes(search.toLowerCase())
    );

    const byTitle = selectedTitle
      ? bySearch.filter((d) => d.title === selectedTitle)
      : bySearch;

    return byTitle.reduce<Record<string, Doctor[]>>((acc, doc) => {
      (acc[doc.title] ??= []).push(doc);
      return acc;
    }, {});
  }, [groupedAll, search, selectedTitle]);

  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">Загрузка...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Ошибка загрузки данных
      </div>
    );
  }

  return (
    <div className="bg-[#f8f0e8] min-h-screen py-8 px-2">
      <div className="w-full mx-auto space-y-10">
        <div className="space-y-4">
          <SpecialistSearchBar
            value={search}
            onChange={setSearch}
            placeholder="Поиск специалиста"
          />
          <div className="overflow-x-auto pb-2">
            <SpecialistTitleScroller
              titles={titles}
              selectedTitle={selectedTitle}
              onSelect={(title) =>
                setSelectedTitle((prev) => (prev === title ? null : title))
              }
            />
          </div>
        </div>

        {Object.entries(filteredGrouped).map(([title, doctors]) => (
          <section key={title}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <div
              className="grid gap-4 justify-center"
              style={{
                gridTemplateColumns: `repeat(auto-fill, ${CARD_WIDTH}px)`,
              }}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                  className="relative flex flex-col justify-between"
                >
                  <DoctorCard
                    doctor={doctor}
                    showButton
                    onBookClick={() => setSelectedDoctor(doctor)}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedDoctor && (
        <ModalDoctorInfo
          isOpen={true}
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default SpecialistsPage;
