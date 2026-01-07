import { CartSidebar } from "@/domains/cart/ui/CartSidebar";
import { ProductGrid } from "@/domains/catalog/ui/ProductGrid";

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <main className="flex-1 overflow-y-auto p-6 relative">
        <ProductGrid />
      </main>

      <aside className="hidden md:block border-l w-95 border-zinc-200">
        <CartSidebar />
      </aside>
      <footer className="absolute md:hidden bottom-0 left-0 right-0 w-full border-t border-t-zinc-200">
        <CartSidebar />
      </footer>
    </div>
  );
}
