import { CartSidebar } from "@/domains/cart/ui/CartSidebar";
import { ProductGrid } from "@/domains/catalog/ui/ProductGrid";

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <main className="flex-1 overflow-y-auto p-6">
        <ProductGrid />
      </main>

      <aside className="w-95 border-l border-zinc-200">
        <CartSidebar />
      </aside>
    </div>
  );
}
