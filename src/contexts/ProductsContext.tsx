import { useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types";
import { ProductsContext } from "../hooks/useProductsContext"; 

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};