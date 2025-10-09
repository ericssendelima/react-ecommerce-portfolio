import { BackToHomeButton } from "../../components/BackToHomeButton";
import { CardCart } from "../../components/CardCart";
import { SendOrder } from "../../components/SendOrder";
import styles from "./ShoppingCartPage.module.css";

export const ShoppingCartPage = () => {
  return (
    <div className={styles.shoppingCartPage}>
      <h1>Carrinho de Compras</h1>
      <CardCart />
      <CardCart />
      <CardCart />
      <BackToHomeButton />
      <SendOrder />
    </div>
  );
};
