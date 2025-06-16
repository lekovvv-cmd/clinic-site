import React from "react";

export type DepartmentCardProps = {
  title: string;
  image: string;
};

const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, image }) => (
  <div
    className="
      bg-white rounded-2xl p-6 shadow hover:shadow-lg transition
      flex flex-col justify-between items-start cursor-pointer
      h-full
    "
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <img
      src={image}
      alt={title}
      className="w-36 h-36 object-contain ml-auto mt-auto"
    />
  </div>
);

export default DepartmentCard;
