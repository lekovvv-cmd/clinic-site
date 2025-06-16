import React from "react";

type StatsOverviewCardProps = {
  variant: "highlight" | "info" | "tags";
  title?: string;
  subtitle: string;
  tags?: string[];
  className?: string;
};

const StatsOverviewCard: React.FC<StatsOverviewCardProps> = ({
  variant,
  title,
  subtitle,
  tags,
  className = "",
}) => {
  const bg =
    variant === "highlight"
      ? "bg-[#7b492d] text-white"
      : "bg-gray-100 text-gray-800";
  const base = ["rounded-4xl p-6 shadow", bg, className]
    .filter(Boolean)
    .join(" ");

  if (variant === "tags") {
    return (
      <div className={base}>
        <p className="text-base mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="bg-white rounded-full px-3 py-1 text-sm text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={base}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default StatsOverviewCard;
