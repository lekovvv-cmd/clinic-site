import React from "react";
import { Link } from "react-router-dom";
import DepartmentCard from "../../components/Card/DepartmentCard";
import specialistImg from "../../assets/images/specialists/specialist.png";
import { departmentDetails } from "../../data/departmentDetails";

const DepartmentsGrid: React.FC = () => (
  <section className="py-4 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(departmentDetails).map(([slug, info]) => (
          <Link to={`/departments/${slug}`} key={slug} className="block h-full">
            <DepartmentCard
              title={info.title}
              image={info.image || specialistImg}
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DepartmentsGrid;
