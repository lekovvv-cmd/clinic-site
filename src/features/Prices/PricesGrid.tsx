import React from "react";
import { Link } from "react-router-dom";
import DepartmentCard from "../../components/Card/DepartmentCard";
import { departments } from "../../data/servicesPriceDetails";

const PricesGrid: React.FC = () => (
  <section className="py-4 px-2 sm:px-4 lg:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {departments.map(({ key, title, photoUrl }) => (
          <Link to={`/prices/${key}`} key={key} className="block h-full">
            <DepartmentCard title={title} image={photoUrl} />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PricesGrid;
