import styles from "./CartButton.module.css";

import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";

export const CartButton = () => {
  const { cartProducts } = useCart();

  const totalItems = cartProducts.reduce((acc, item) => acc + item.quantidade, 0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.cartButton} onClick={handleClick}>
      <BsCartCheck />
      <span id="visorCarrinho">{totalItems}</span>
    </div>
  );
};
