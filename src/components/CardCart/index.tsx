import styles from "./CardCart.module.css";

import logo from "../../assets/logo.png";
import { ImBin } from "react-icons/im";

export const CardCart = () => {
  return (
    <div className={styles.cardCart}>
      <div className={styles.cardBody}>
        <img src={logo} alt="Product Image" />

        <div className={styles.infoBody}>
          <h5 className={styles.prodName}>Nome do Produto</h5>
          <h6 className={styles.valorProd}>R$ 0.00</h6>

          <div className={styles.controlsContainer}>
            <div className={styles.controls}>
              <div className={styles.quantityControl}>-</div>
              <p className={styles.quantity}>1</p>
              <div className={styles.quantityControl}>+</div>
            </div>

            <div className={styles.removeButton}>
              <ImBin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
