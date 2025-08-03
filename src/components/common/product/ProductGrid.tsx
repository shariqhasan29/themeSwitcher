import React from "react";
import type { Product } from "../../../types";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductSkeleton";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {loading
      ? Array.from({ length: 8 }, (_, i) => <ProductSkeleton key={i} />)
      : products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
  </div>
);
