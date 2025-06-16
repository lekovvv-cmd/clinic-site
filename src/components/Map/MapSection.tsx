import React from "react";
import { StatCard } from "../Card/StatCard";
import { Phone, MapPin, Clock } from "lucide-react";
import ContactMap from "../../features/Contacts/ContactMap";

const MapSection: React.FC = () => {
  return (
    <section className="py-6 px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatCard
          value={<Phone className="w-8 h-8" />}
          label="Телефоны"
          description={
            "​+7 (3452) 39-07-07\n+7 (3452) 39-08-08\n+7 (939) 848-06-94\n+7 (939) 848-06-95"
          }
        />
        <StatCard
          value={<MapPin className="w-8 h-8" />}
          label="Адрес"
          description="г. Мсоква, улица Пушкина, 9"
        />
        <StatCard
          value={<Clock className="w-8 h-8" />}
          label="Режим работы"
          description={"Пн–Пт: 8:00 – 20:00\nСб: 9:00 – 17:00\nВс: выходной"}
        />
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg -my-5 h-120">
        <ContactMap />
      </div>
    </section>
  );
};

export default MapSection;
