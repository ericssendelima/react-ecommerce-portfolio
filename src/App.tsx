import { createBrowserRouter } from "react-router";

//Pages
import { ProductListingPage } from "./features/product-listing";
import { ShoppingCartPage } from "./features/shopping-cart";

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
