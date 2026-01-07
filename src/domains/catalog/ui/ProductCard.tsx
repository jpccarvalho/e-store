"use client";

import { useCartStore } from "@/domains/cart/model/useCartStore";
import { Button } from "@/shared/ui/Button";

export function ProductCard({ product }: any) {
  const addProduct = useCartStore((s) => s.addProduct);

  return (
    <div className="border border-[#ddd] p-4 rounded-sm">
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <Button className="" onClick={() => addProduct(product)}>
        Adicionar
      </Button>
    </div>
  );
}
