import React, { useState } from "react";
import { Paperclip } from "lucide-react";
import DepartmentCard from "../components/Card/DepartmentCard";
import { vacancies } from "../data/vacancies";
import { Button } from "../components/Button/Button";
import { motion, AnimatePresence } from "framer-motion";

const VacanciesPage: React.FC = () => {
  const [selected, setSelected] = useState<string>(vacancies[0].key);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    console.log({ selected, name, phone, info, file });
    setShowModal(true);
    // reset form
    setName("");
    setPhone("");
    setInfo("");
    setConsent(false);
    setFile(null);
    setSelected(vacancies[0].key);
  };

  return (
    <section className="py-4 px-4">
      <div className="max-w-screen-xxl mx-4 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">
            Мы в поиске специалистов в нашу команду
          </h1>
          <p className="text-gray-700">
            Мы гарантируем официальное трудоустройство, своевременные выплаты
            заработной платы, полный социальный пакет
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {vacancies.map((v) => (
              <DepartmentCard key={v.key} title={v.title} image={v.image} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">
            Станьте частью команды
          </h2>
          <p className="text-gray-700 mb-6">
            Оставьте свое резюме, и мы обязательно с вами свяжемся!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative">
                  <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="appearance-none w-full border border-gray-200 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-red-600 cursor-pointer"
                  >
                    {vacancies.map((v) => (
                      <option key={v.key} value={v.key}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />

                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__ *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">
                    Я даю согласие на{' '}
                    <a href="#" className="text-red-600 hover:underline">
                      обработку персональных данных
                    </a>
                  </span>
                </label>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
                    <span className="text-gray-700 truncate">
                      {file ? file.name : "Вложить файл резюме"}
                    </span>
                    <Paperclip className="w-5 h-5 text-gray-500 shrink-0" />
                  </div>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                <textarea
                  placeholder="Дополнительная информация"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant={consent ? "primary" : "disabled"}
              className="w-full"
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <>            
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowModal(false)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center space-y-6">
                <h3 className="text-2xl font-semibold text-green-600">
                  Спасибо! Мы получили ваше резюме.
                </h3>
                <p className="text-gray-700">
                  Мы свяжемся с вами в ближайший рабочий день.
                </p>
                <Button
                  onClick={() => setShowModal(false)}
                  variant="primary"
                  className="w-full"
                >
                  Закрыть
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VacanciesPage;