import styles from "./ShoppingCartPage.module.css";

import { BackToHomeButton } from "../../components/BackToHomeButton/index";
import { CardCart } from "../../components/CardCart/index";
import { SendOrder } from "../../components/SendOrder/index";

import { useCart } from "../../hooks/useCart";

export const ShoppingCartPage = () => {
  const { cartProducts } = useCart();

  return (
    <div className={styles.shoppingCartPage}>
      <h1>Carrinho de Compras</h1>
      {cartProducts.map((product) => (
        <CardCart key={product.id} product={product} />
      ))}
      <BackToHomeButton />
      <SendOrder />
    </div>
  );
};
