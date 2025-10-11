import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import router from "./App";
import { CartProductsContextProvider } from "./contexts/CartContext";
import { ProductsContextProvider } from "./contexts/ProductsContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsContextProvider>
      <CartProductsContextProvider>
        <RouterProvider router={router} />
      </CartProductsContextProvider>
    </ProductsContextProvider>
  </StrictMode>
);
