import styles from "./ProductListingPage.module.css";
import { useEffect, useState } from "react";

import { Card } from "../../components/Card/index";
import { CartButton } from "../../components/CartButton/index";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/index";

import type { Product } from "../../types";

import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProductsContext";

import { onValue, ref, db } from "../../services/firebase";
import { TbHandClick } from "react-icons/tb";
import { Categories } from "../../components/Categories";

export const ProductListingPage = () => {
  const { products, setProducts } = useProducts();
  const { cartProducts } = useCart();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);



  useEffect(() => {
    if (products.length === 0) {
      onValue(
        ref(db, `${import.meta.env.VITE_PERM_ED}/products/`),
        (snapshot) => {
          const data = snapshot.val();
          if (data !== undefined) {
            setProducts([...Object.values(data)] as Product[]);
            setFilteredItems([...Object.values(data)] as Product[]);
            setIsLoading(false);
          }
        },
        (error) => alert(error)
      );
    } else {
      setFilteredItems(products);
      setIsLoading(false);
    }
  }, []);

  const openCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className={styles.productListingPage}>
      <h1>Catálogo de Produtos</h1>

       {isCategoriesOpen ? (
        <Categories
          config={{
            setFilteredItems,
            isCategoriesOpen,
            setIsCategoriesOpen,
          }}
        />
      ) : (
        <div className={styles.categoriesButton}>
          <button className={styles.openCategoriesButton} onClick={() => openCategories()}>
            Categorias <TbHandClick style={{ fontSize: "25px" }} />
          </button>
        </div>
      )}

      <div>
        {!isLoading ? (
          <ol>
            {filteredItems.map(
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
