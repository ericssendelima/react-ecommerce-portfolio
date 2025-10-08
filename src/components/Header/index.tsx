import styles from "./Header.module.css";

import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleNavigation}>
        Logo
      </div>
      <div className={styles.totalPurchase}>
        <p>Total do pedido</p>
        <span>R$ 0.00</span>
      </div>
    </header>
  );
};
