import styles from "./CardCart.module.css";

import logo from "../../assets/logo.png";
import { ImBin } from "react-icons/im";

import type { Product } from "../../types";
import { useCart } from "../../contexts/useCart";

interface CardProduct {
  product: Product;
}

export const CardCart = ({ product }: CardProduct) => {
  const { setCartProducts } = useCart();

  const RemoveProduct = () => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className={styles.cardCart}>
      <div className={styles.cardBody}>
        <img src={logo} alt="Product Image" />

        <div className={styles.infoBody}>
          <h5 className={styles.prodName}>{product.name}</h5>
          <h6 className={styles.valorProd}>R$ {product.preco.toFixed(2)}</h6>

          <div className={styles.controlsContainer}>
            <div className={styles.controls}>
              <div className={styles.quantityControl}>-</div>
              <p className={styles.quantity}>{product.quantidade}</p>
              <div className={styles.quantityControl}>+</div>
            </div>

            <div
              className={styles.removeButton}
              onClick={() => RemoveProduct()}
            >
              <ImBin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
