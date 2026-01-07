"use client";

import { useCatalog } from "../model/useCatalog";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const { products } = useCatalog();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
