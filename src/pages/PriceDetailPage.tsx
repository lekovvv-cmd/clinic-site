import React from "react";
import { useParams } from "react-router-dom";
import { pricesDetails, type PriceItem } from "../data/pricesDetails";
import { departments, type Department } from "../data/servicesPriceDetails";

const PriceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !pricesDetails[slug]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f0e8]">
        <p className="text-xl text-red-500">Услуга не найдена</p>
      </div>
    );
  }

  const items: PriceItem[] = pricesDetails[slug];

  const dept: Department | undefined = departments.find((d) => d.key === slug);
  const title = dept ? dept.title : "";

  return (
    <main className="max-w-screen-xl mx-auto py-4 px-4 lg:px-0">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6">{title}</h1>

        <ul className="divide-y divide-gray-200">
          {items.map((it, i) => (
            <li key={i} className="py-4 flex justify-between">
              <span className="text-gray-800">{it.name}</span>
              <span className="font-medium">{it.price} ₽</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PriceDetailPage;
