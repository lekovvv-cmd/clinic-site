import React from "react";

type FeatureCardProps = { children: React.ReactNode };

const FeatureCard: React.FC<FeatureCardProps> = ({ children }) => (
  <div className="bg-white rounded-xl p-6 shadow text-gray-800">{children}</div>
);

export default FeatureCard;
