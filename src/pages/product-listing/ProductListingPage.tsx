import styles from "./ProductListingPage.module.css";
import { useEffect, useState } from "react";

import { Card } from "../../components/Card/index";
import { CartButton } from "../../components/CartButton/index";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/index";

import type { Product } from "../../types";

import { useCart } from "../../hooks/useCart";
import { onValue, ref, db } from "../../services/firebase";
import { useProducts } from "../../hooks/useProductsContext";

export const ProductListingPage = () => {
  const { products, setProducts } = useProducts();
  const { cartProducts } = useCart();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length === 0) {
      onValue(
        ref(db, `${import.meta.env.VITE_PERM_ED}/products/`),
        (snapshot) => {
          const data = snapshot.val();
          if (data !== undefined) {
            const teste = Object.values(data) as Product[];
            console.log("Teste:", teste);
            setProducts([...Object.values(data)] as Product[]);
            setIsLoading(false);
          }
        },
        (error) => alert(error)
      );
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={styles.productListingPage}>
      <h1>Catálogo de Produtos</h1>
      <div>
        {!isLoading ? (
          <ol>
            {products.map(
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
