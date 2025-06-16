import React from "react";
import { SpecialistTitleScroller } from "./Navigation/SpecialistTitleScroller";
import { DoctorCard } from "../../components/Card/DoctorCard";
import type { Doctor } from "../../types";
import specialistImg from "../../assets/images/specialists/specialist.png";

const specialistImages: Record<string, string> = import.meta.glob(
  "/src/assets/images/specialists/*.png",
  { eager: true, import: "default" }
) as Record<string, string>;

const importPhoto = (photoUrl?: string) => {
  if (!photoUrl) return specialistImg;
  const fileName = photoUrl.split("/").pop();
  const key = `/src/assets/images/specialists/${fileName}`;
  return specialistImages[key] || specialistImg;
};

type Props = {
  titles: string[];
  grouped: Record<string, Doctor[]>;
  selectedTitle: string | null;
  onSelectTitle: (title: string) => void;
  showBookButton?: boolean;
  onBookClick?: (doctor: Doctor) => void;
};

export const SpecialistSection: React.FC<Props> = ({
  titles,
  grouped,
  selectedTitle,
  onSelectTitle,
  showBookButton = false,
  onBookClick,
}) => {
  const filteredGrouped: Record<string, Doctor[]> = selectedTitle
    ? { [selectedTitle]: grouped[selectedTitle] ?? [] }
    : grouped;

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-12 space-y-12">
      <SpecialistTitleScroller
        titles={titles}
        selectedTitle={selectedTitle}
        onSelect={onSelectTitle}
      />

      {Object.entries(filteredGrouped).map(([title, doctors]) => (
        <div key={title} className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={{
                  ...doctor,
                  photoUrl: importPhoto(doctor.photoUrl),
                }}
                showButton={showBookButton}
                onBookClick={() => onBookClick?.(doctor)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SpecialistSection;
