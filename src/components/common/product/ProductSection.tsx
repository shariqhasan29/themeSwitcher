import React from "react";
import { ProductGrid } from "./ProductGrid";
import { ErrorState } from "../../ui/errorState";
import type { Product } from "../../../types";

interface ProductsSectionProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  loading,
  error,
  onRetry,
}) => (
  <section className="flex flex-col gap-4 justify-center py-10">
    <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
      Card-based grid layout, playful Google Font
    </h2>
    <p className="text-lg md:text-xl text-secondary pt-4 text-center">
      Handpicked items just for you
    </p>

    {error ? (
      <ErrorState error={error} onRetry={onRetry} />
    ) : (
      <ProductGrid products={products} loading={loading} />
    )}
  </section>
);
