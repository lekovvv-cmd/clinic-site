import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const SpecialistSearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Поиск…",
}) => (
  <div className="relative">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-[0.5px]"
    />
    <Search
      size={20}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
    />
  </div>
);
