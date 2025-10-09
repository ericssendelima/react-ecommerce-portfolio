import { useEffect, useState } from "react";
import styles from "./ProductListingPage.module.css";

import { Card } from "../../components/Card";
import { CartButton } from "../../components/CartButton";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";

import type { Product } from "../../types";
import { data } from "../../data";
import { useCart } from "../../hooks/useCart";

export const ProductListingPage = () => {
  const [productsDb, setProductsDb] = useState<Product[]>([]);

  const { cartProducts } = useCart();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    if (productsDb.length === 0) {
      setProductsDb(data);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={styles.productListingPage}>
      <h1>Catálogo de Produtos</h1>
      <div>
        {!isLoading ? (
          <ol>
            {productsDb.map(
              (product) =>
                // Only show products that are not already in the cart
                cartProducts.filter((item) => item.id === product.id).length ===
                  0 && (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                )
            )}
          </ol>
        ) : (
          <h1>Carregando produtos...</h1>
        )}
      </div>
      <ScrollToTopButton />
      <CartButton />
    </div>
  );
};
