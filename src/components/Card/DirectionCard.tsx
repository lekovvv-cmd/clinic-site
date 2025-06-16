import React from "react";
import type { Direction } from "../../types";

export const DirectionCard: React.FC<{ dir: Direction }> = ({ dir }) => (
  <div className="bg-white rounded-xl shadow p-6 flex items-start space-x-4 w-full h-26 max-w-md">
    <img
      src={dir.iconUrl}
      alt={dir.title}
      loading="eager"
      className="w-12 h-12 flex-shrink-0"
    />
    <div className="flex flex-col justify-center">
      <h4 className="text-lg font-medium">{dir.title}</h4>
      <p className="text-sm text-gray-600">{dir.description}</p>
    </div>
  </div>
);

