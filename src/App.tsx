import { createBrowserRouter } from "react-router";

//Pages
import { ProductListingPage } from "./pages/product-listing";
import { ShoppingCartPage } from "./pages/shopping-cart";

//Layout
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductListingPage />,
      },
      {
        path: "/cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
]);

export default router;
