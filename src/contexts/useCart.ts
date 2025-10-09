import { useContext, createContext } from "react";
import type { Product } from "../types";
import type { Dispatch, SetStateAction } from "react";

interface CartContextType {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
}

// A Definição do Contexto
export const CartProductsContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: () => {},
});

export const useCart = () => {
  const context = useContext(CartProductsContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProductsContextProvider");
  }
  return context;
};