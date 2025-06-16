import React from "react";
import clsx from "clsx";

type StatCardProps = {
  value: string | React.ReactNode;
  label: string;
  description: string;
  highlight?: boolean;
};

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  highlight = false,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 shadow transition transform hover:-translate-y-1 hover:shadow-lg",
        highlight ? "bg-red-600 text-white" : "bg-white text-gray-900"
      )}
    >
      <div className="text-left w-full">
        <div
          className={clsx(
            "text-4xl font-extrabold",
            highlight ? "text-white" : "text-red-600"
          )}
        >
          {value}
        </div>
        <p
          className={clsx("mt-1 text-lg font-bold", highlight && "text-white")}
        >
          {label}
        </p>
        <p
          className={clsx(
            "mt-2 text-sm whitespace-pre-line",
            highlight ? "text-red-100" : "text-gray-600"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
