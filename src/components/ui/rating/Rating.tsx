import React from "react";

interface ProductRatingProps {
  rate: number;
  count: number;
}

export const Rating: React.FC<ProductRatingProps> = ({ rate, count }) => (
  <div className="flex items-center gap-2 pb-4">
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-base ${
            i < Math.floor(rate) ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
    <span className="text-xs text-secondary">({count})</span>
  </div>
);
