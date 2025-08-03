import React from "react";
import type { Product } from "../../../types";
import { formatPrice, truncateText } from "../../../utils/formatters";
import { Rating } from "../../ui/rating";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <article
    className="bg-secondary border border-primary overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
    style={{
      borderRadius: "var(--border-radius)",
      boxShadow: "0 4px 6px var(--shadow-color)",
    }}
  >
    {/* Product Image - No padding for flush look */}
    <div className="relative h-48 bg-white flex items-center justify-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200">
          Quick View
        </button>
      </div>
    </div>

    {/* Product Content - Minimal padding */}
    <div className="p-3 flex flex-col flex-1">
      <div className="text-xs text-accent uppercase tracking-wider font-bold mb-2">
        {product.category}
      </div>
      <h3
        className="text-base font-semibold text-primary line-clamp-2 leading-tight mb-2"
        title={product.title}
      >
        {truncateText(product.title, 50)}
      </h3>
      <p className="text-secondary text-sm line-clamp-2 leading-relaxed mb-3 flex-1">
        {truncateText(product.description, 80)}
      </p>

      <div className="mb-2">
        <Rating rate={product.rating.rate} count={product.rating.count} />
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-accent">
          {formatPrice(product.price)}
        </span>
        <button className="bg-accent hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5">
          Add to Cart
        </button>
      </div>
    </div>
  </article>
);
