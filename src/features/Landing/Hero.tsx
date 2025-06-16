import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/family.webp";
import { Button } from "../../components/Button/Button";
import { Stethoscope, Briefcase } from "lucide-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-8 max-w-full">
        <div className="lg:w-1/2 space-y-10 flex flex-col justify-center h-full">
          <h1 className="text-6xl font-serif text-left">ЭкоМед</h1>
          <p className="text-2xl text-gray-700 text-left">
            Современная медицинская помощь для вашей семьи. Забота,
            профессионализм и индивидуальный подход к каждому пациенту.
          </p>
          <Button
            className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition self-start cursor-pointer"
            onClick={() => navigate("/specialists")}
          >
            Записаться онлайн
          </Button>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col items-center space-y-4">
          <div className="w-full">
            <img
              src={heroImage}
              alt="Клиника ЭкоМед"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 flex items-start shadow">
              <Stethoscope className="w-8 h-8 mr-4 mt-1" />
              <div className="text-left w-full">
                <div className="text-3xl font-semibold text-red-600">
                  &gt;15
                </div>
                <p className="mt-1 text-gray-600 text-sm">
                  Направлений деятельности
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-start shadow">
              <Briefcase className="w-8 h-8 mr-4 mt-1" />
              <div className="text-left w-full">
                <div className="text-3xl font-semibold text-red-600">
                  10 лет
                </div>
                <p className="mt-1 text-gray-600 text-sm">Успешной работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
