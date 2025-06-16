import React, { useRef, useEffect, useState } from "react";
import type { Doctor } from "../../types";
import { DoctorCard } from "../../components/Card/DoctorCard";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

export type SpecialistsCarouselProps = { specialists: Doctor[] };

export const SpecialistsCarousel: React.FC<SpecialistsCarouselProps> = ({
  specialists,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  const scroll = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollButtons();

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative max-w-full">
      {canScrollLeft && (
        <div
          onClick={() => scroll(-800)}
          className="absolute left-0 inset-y-0 w-16 cursor-pointer z-10 flex items-center justify-center"
        >
          <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <img src={ArrowLeft} alt="Назад" className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar px-12 py-4 scroll-smooth snap-x snap-mandatory"
      >
        {specialists.map((doc) => (
          <div key={doc.id} className="snap-start flex-shrink-0 w-124">
            <DoctorCard doctor={doc} />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <div
          onClick={() => scroll(800)}
          className="absolute right-0 inset-y-0 w-16 cursor-pointer z-10 flex items-center justify-center"
        >
          <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <img
              src={ArrowRight}
              alt="Вперед"
              className="w-6 h-6 text-red-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};
