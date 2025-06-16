import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";

type DepartmentHeroProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const DepartmentHero: React.FC<DepartmentHeroProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-white rounded-2xl mx-4 lg:mx-16 p-8 flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-gray-700 leading-relaxed font-semibold">
          {description}
        </p>
        <Button onClick={() => navigate("/specialists")}>
          Записаться онлайн
        </Button>
      </div>
      <div className="lg:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default DepartmentHero;
