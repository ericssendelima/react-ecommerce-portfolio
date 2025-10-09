import { BackToHomeButton } from "../../components/BackToHomeButton";
import { CardCart } from "../../components/CardCart";
import { SendOrder } from "../../components/SendOrder";
import { useCart } from "../../hooks/useCart";
import styles from "./ShoppingCartPage.module.css";

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
