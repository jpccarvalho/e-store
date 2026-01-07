import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];

  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  decrementProduct: (productId: number) => void;
  clearCart: () => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addProduct: (product) => {
    const items = get().items;
    const existing = items.find((i) => i.product.id === product.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({
        items: [...items, { product, quantity: 1 }],
      });
    }
  },

  decrementProduct: (productId) => {
    const items = get().items;
    const existing = items.find((i) => i.product.id === productId);

    if (!existing) return;

    if (existing.quantity === 1) {
      set({
        items: items.filter((i) => i.product.id !== productId),
      });
    } else {
      set({
        items: items.map((i) =>
          i.product.id === productId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
      });
    }
  },

  removeProduct: (productId) => {
    set({
      items: get().items.filter((i) => i.product.id !== productId),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () =>
    get().items.reduce((acc, item) => acc + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ),
}));
