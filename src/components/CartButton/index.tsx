import { BsCartCheck } from "react-icons/bs";
import styles from "./CartButton.module.css";
import { useNavigate } from "react-router";

export const CartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.cartButton} onClick={handleClick}>
      <BsCartCheck />
      <span id="visorCarrinho">88</span>
    </div>
  );
};
