import styles from "./ProductListingPage.module.css";
import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { CartButton } from "../../components/CartButton";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";

import type { Product } from "../../types";

import { useCart } from "../../hooks/useCart";
import { onValue, ref, db } from "../../services/firebase";

export const ProductListingPage = () => {
  const [productsDb, setProductsDb] = useState<Product[]>([]);

  const { cartProducts } = useCart();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    if (productsDb.length === 0) {
    onValue(
      ref(db, `${import.meta.env.VITE_PERM_ED}/products/`),
      (snapshot) => {
        const data = snapshot.val();

        if (data !== undefined) {
          setProductsDb([...Object.values(data)] as Product[]);
          setIsLoading(false);
        }
      },
      (error) => alert(error));
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
