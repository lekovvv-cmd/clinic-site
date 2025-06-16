import React from "react";

type TextCardProps = {
  text: string;
};

const TextCard: React.FC<TextCardProps> = ({ text }) => (
  <div className="bg-white rounded-xl p-6 shadow text-gray-800">{text}</div>
);

export default TextCard;
