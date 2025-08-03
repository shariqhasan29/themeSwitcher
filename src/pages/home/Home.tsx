import React from "react";
import { HeroSection } from "../../components/common/heroSection";
import { ProductsSection } from "../../components/common/product";
import { useThemeConfig } from "../../hooks";
import { useFetch } from "../../hooks";

import type { Product } from "../../types";
export const Home: React.FC = () => {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch<Product[]>("https://fakestoreapi.com/products?limit=8");

  const { name, description, showHero, showProducts } = useThemeConfig();
  return (
    <main className="main-container bg-primary">
      <div className="container mx-auto px-4">
        {showHero && (
          <HeroSection themeName={name} themeDescription={description} />
        )}
        {showProducts && (
          <ProductsSection
            products={products ?? []}
            loading={loading}
            error={error}
            onRetry={refetch}
          />
        )}
      </div>
    </main>
  );
};
