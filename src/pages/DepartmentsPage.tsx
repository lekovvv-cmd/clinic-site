import React from "react";
import SectionIntro from "../features/Department/SectionIntro";
import DepartmentsGrid from "../features/Department/DepartmentsGrid";

const DepartmentsPage: React.FC = () => (
  <main className="ру-4 max-w-screen-xxl mx-4">
    <SectionIntro
      title="Какое отделение вас интересует?"
      subtitle="Выберите одно из направлений, чтобы узнать подробности и найти нужного специалиста."
    />
    <DepartmentsGrid />
  </main>
);

export default DepartmentsPage;
