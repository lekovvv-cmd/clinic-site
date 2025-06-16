import React from "react";
import trustImage from "../../assets/images/contact-doctor.webp";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const TrustSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl overflow-hidden py-2 px-2 sm:px-4 mx-10 -my-12">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Ваше доверие — наша
            <br />
            ответственность
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Мы прилагаем все усилия, чтобы обеспечить безопасность
            <br />и высокое качество медицинских услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 text-red-600 hover:underline text-lg"
            >
              Контакты <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/vacancies"
              className="inline-flex items-center gap-2 text-red-600 hover:underline text-lg"
            >
              Вакансии <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={trustImage}
            alt="Врач с папкой"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
