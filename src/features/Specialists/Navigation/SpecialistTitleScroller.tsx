import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TitleScrollerProps = {
  titles: string[];
  onSelect: (title: string) => void;
  selectedTitle: string | null;
};

export const SpecialistTitleScroller: React.FC<TitleScrollerProps> = ({
  titles,
  onSelect,
  selectedTitle,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const container = scrollRef.current!;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateArrows();
    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [titles]);

  const scrollByItems = (dir: "left" | "right") => {
    const container = scrollRef.current!;
    const children = Array.from(container.children) as HTMLElement[];
    if (!children.length) return;

    const scrollLeft = container.scrollLeft;
    const style = getComputedStyle(container);
    const paddingLeft = parseInt(style.paddingLeft, 10);

    let firstVisible = 0;
    for (let i = 0; i < children.length; i++) {
      const childStart = children[i].offsetLeft - paddingLeft;
      if (childStart >= scrollLeft) {
        firstVisible = i;
        break;
      }
    }

    let newIndex =
      dir === "right"
        ? Math.min(children.length - 1, firstVisible + 4)
        : Math.max(0, firstVisible - 4);

    const targetOffset = children[newIndex].offsetLeft - paddingLeft;
    container.scrollTo({ left: targetOffset, behavior: "smooth" });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => scrollByItems("left")}
        disabled={!canScrollLeft}
        className={`flex-none p-2 rounded-full shadow mr-2 bg-white transition ${
          !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeft className="text-red-500 cursor-pointer" />
      </button>

      <div
        ref={scrollRef}
        className="flex-auto overflow-x-auto no-scrollbar flex items-center gap-4 px-6 py-2 snap-x snap-mandatory"
      >
        {titles.map((title) => (
          <button
            key={title}
            onClick={() => onSelect(title)}
            className={`snap-start whitespace-nowrap px-6 py-2 rounded-full shadow transition cursor-pointer ${
              selectedTitle === title
                ? "bg-red-500 text-white"
                : "bg-white text-gray-800 hover:bg-red-100"
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollByItems("right")}
        disabled={!canScrollRight}
        className={`flex-none p-2 rounded-full shadow ml-2 bg-white transition ${
          !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRight className="text-red-500 cursor-pointer" />
      </button>
    </div>
  );
};
