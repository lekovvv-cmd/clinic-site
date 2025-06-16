import React from "react";
import type { Doctor } from "../../types";
import { Button } from "../Button/Button";

export type DoctorCardProps = {
  doctor: Doctor;
  showButton?: boolean;
  onBookClick?: () => void;
};

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  showButton = false,
  onBookClick,
}) => (
  <div className="bg-white rounded-xl shadow p-8 text-center w-full h-full flex flex-col">
    <img
      src={doctor.photoUrl}
      alt={doctor.name}
      className="w-72 h-72 mx-auto rounded-full mb-8"
    />
    <h3 className="text-4xl font-semibold mb-2">{doctor.name}</h3>
    <p className="text-2xl text-gray-500 mb-2">{doctor.title}</p>

    {showButton && (
      <Button onClick={onBookClick} className="mt-auto mx-auto block">
        Записаться онлайн
      </Button>
    )}
  </div>
);
