"use client";

import { useCatalog } from "../model/useCatalog";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const { products } = useCatalog();

  return (
    <div className="grid grid-cols-1 min-[440px]:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
