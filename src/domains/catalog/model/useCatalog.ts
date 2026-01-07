"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

export function useCatalog() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return { products };
}
