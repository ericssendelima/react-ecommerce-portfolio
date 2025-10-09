import { useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types";
import { CartProductsContext } from "../hooks/useCart"; 

interface CartProductsContextProviderProps {
  children: ReactNode;
}

export const CartProductsContextProvider = ({ children }: CartProductsContextProviderProps) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProductsContext.Provider>
  );
};