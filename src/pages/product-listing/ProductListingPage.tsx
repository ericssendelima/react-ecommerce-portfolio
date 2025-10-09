import { Card } from "../../components/Card/Index";
import { CartButton } from "../../components/CartButton";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";
import styles from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <div className={styles.productListingPage}>
      Catálogo de Produtos
      <Card />
      <Card />
      <Card />
      <Card />
      <ScrollToTopButton />
      <CartButton />
    </div>
  );
};
