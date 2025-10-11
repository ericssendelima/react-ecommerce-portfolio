import { useContext, createContext } from "react";
import type { Product } from "../types";
import type { Dispatch, SetStateAction } from "react";

interface ProductsContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

// A Definição do Contexto
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
});

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts deve ser usado dentro de um ProductsContextProvider");
  }
  return context;
};