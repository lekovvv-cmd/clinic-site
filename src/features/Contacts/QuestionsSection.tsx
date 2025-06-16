import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/Button/Button";
import contactImg from "../../assets/images/contact-doctor.webp";

const departments = [
  "Регистратура",
  "Главный врач",
  "Исполнительный директор",
  "Возьмите на работу",
];

const QuestionsSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [consent, setConsent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    console.log({ selectedDept, name, email, question });
    setShowModal(true);

    setName("");
    setEmail("");
    setQuestion("");
    setConsent(false);
    setSelectedDept(departments[0]);
  };

  return (
    <section className="px-4">
      <div className="max-w-screen-xxl mx-auto">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-stretch">
          <div className="w-full lg:w-[60%] bg-white rounded-2xl p-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Остались вопросы?</h2>
              <p className="text-gray-700">
                Если у вас есть вопрос, задайте его — мы свяжемся с вами и
                ответим в ближайший рабочий день.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col space-y-4"
            >
              <label className="block">
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-red-600"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <input
                  type="text"
                  placeholder="Имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </label>

              <label className="block">
                <input
                  type="email"
                  placeholder="E-mail *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </label>

              <label className="block">
                <textarea
                  placeholder="Ваш вопрос *"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-red-600 resize-none"
                />
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  Я даю согласие на{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    обработку персональных данных
                  </a>
                </span>
              </label>

              <Button
                type="submit"
                variant={consent ? "primary" : "disabled"}
                className="w-full"
              >
                Отправить
              </Button>
            </form>
          </div>

          <div className="w-full lg:w-[40%] bg-white rounded-2xl p-8 h-auto">
            <img
              src={contactImg}
              alt="Остались вопросы?"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
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
                  Спасибо за ваш вопрос!
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

export default QuestionsSection;
