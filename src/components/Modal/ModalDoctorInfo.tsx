import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Doctor } from "../../types";

export type ModalDoctorInfoProps = {
  isOpen: boolean;
  doctor: Doctor;
  onClose: () => void;
};

export const ModalDoctorInfo: React.FC<ModalDoctorInfoProps> = ({
  isOpen,
  doctor,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const appointment = {
    date: "2025-06-10",
    time: "15:30",
    location: "Кабинет №12, ул. Пушкина 7, 1/2",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-2xl shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center space-y-4">
                {doctor.photoUrl ? (
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover shadow-sm"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-400">
                    {doctor.name[0]}
                  </div>
                )}

                <h2 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h2>

                <p className="text-sm text-gray-600">{doctor.title}</p>

                <div className="w-full rounded-lg text-left">
                  <h3 className="font-semibold mb-2">Ваша запись:</h3>
                  <p className="text-sm">
                    Дата:{" "}
                    <span className="font-medium">{appointment.date}</span>
                  </p>
                  <p className="text-sm">
                    Время:{" "}
                    <span className="font-medium">{appointment.time}</span>
                  </p>
                  <p className="text-sm">
                    Место:{" "}
                    <span className="font-medium">{appointment.location}</span>
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
