import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { cartProducts } = useCart();

  const totalPrice = cartProducts.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleNavigation}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.totalPurchase} onClick={() => navigate("/cart")}>
        <p>Total do pedido</p>
        <span>R$ {totalPrice.toFixed(2)}</span>
      </div>
    </header>
  );
};
