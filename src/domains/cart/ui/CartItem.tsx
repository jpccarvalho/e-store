"use client";
import { Button } from "@/shared/ui/Button";
import { useCartStore } from "../model/useCartStore";

export function CartItem({ item }: any) {
  const addProduct = useCartStore((s) => s.addProduct);
  const decrementProduct = useCartStore((s) => s.decrementProduct);
  const removeProduct = useCartStore((s) => s.removeProduct);

  return (
    <div className="flex items-center justify-between gap-3 rounded-md border p-3">
      <div>
        <p className="font-medium">{item.product.name}</p>
        <p className="text-sm text-zinc-500">
          R$ {item.product.price} × {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => decrementProduct(item.product.id)}
        >
          -
        </Button>

        <span className="w-6 text-center">{item.quantity}</span>

        <Button variant="secondary" onClick={() => addProduct(item.product)}>
          +
        </Button>

        <Button variant="danger" onClick={() => removeProduct(item.product.id)}>
          Remover
        </Button>
      </div>
    </div>
  );
}
