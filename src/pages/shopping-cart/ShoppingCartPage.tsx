import { BackToHomeButton } from "../../components/BackToHomeButton";
import { SendOrder } from "../../components/SendOrder";
import styles from "./ShoppingCartPage.module.css";

export const ShoppingCartPage = () => {
  return (
    <div className={styles.shoppingCartPage}>
      ShoppingCartPage
      <BackToHomeButton />
      <SendOrder />
    </div>
  );
};
