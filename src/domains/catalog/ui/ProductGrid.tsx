"use client";

import { useCatalog } from "../model/useCatalog";
import { ProductCard } from "./ProductCard";


export function ProductGrid() {
  const { products } = useCatalog();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
