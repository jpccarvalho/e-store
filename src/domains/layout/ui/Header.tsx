"use client";
import { useCartStore } from "@/domains/cart/model/useCartStore";

export function Header() {
  const getTotalItems = useCartStore((s) => s.getTotalItems());

  return (
    <header className="h-16 border-b border-b-[#eee] flex items-center justify-between px-6">
      <strong>e-Store</strong>
      <span>Itens no carrinho: {getTotalItems}</span>
    </header>
  );
}
