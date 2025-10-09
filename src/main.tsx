import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import router from "./App";
import { CartProductsContextProvider } from "./contexts/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProductsContextProvider>
      <RouterProvider router={router} />
    </CartProductsContextProvider>
  </StrictMode>
);
