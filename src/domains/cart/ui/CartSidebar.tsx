"use client";
import { Button } from "@/shared/ui/Button";
import { useCartStore } from "../model/useCartStore";
import { CartItem } from "./CartItem";
import { formatMoney } from "@/shared/lib/formatMoney";

export function CartSidebar() {
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => formatMoney(s.getTotalPrice()));

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-zinc-200 p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Carrinho</h2>
        <h2 className="text-lg font-semibold">{totalPrice}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-zinc-500">Seu carrinho está vazio</p>
        )}

        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="border-t border-zinc-200 p-4">
        <Button className="w-full">Finalizar compra</Button>
      </div>
    </div>
  );
}
