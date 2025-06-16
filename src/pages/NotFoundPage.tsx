import React from "react";
import { Link } from "react-router-dom";
import Specialist from "../assets/images/specialists/specialist.png";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-sm text-center">
        <img
          src={Specialist}
          alt="Доктор"
          className="w-64 h-64 mx-auto mb-8 object-contain"
        />
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Извините, такой страницы не существует.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
