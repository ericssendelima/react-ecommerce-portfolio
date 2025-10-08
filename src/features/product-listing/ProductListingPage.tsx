import { CartButton } from "../../components/CartButton";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";
import styles from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <div className={styles.productListingPage}>
      ProductListingPage
      <ScrollToTopButton />
      <CartButton />
    </div>
  );
};
