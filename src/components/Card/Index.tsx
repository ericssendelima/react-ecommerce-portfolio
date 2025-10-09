import { MdAddShoppingCart } from "react-icons/md";
import styles from "./Card.module.css";

import logo from "../../assets/logo.png";
import type { Product } from "../../types";
import { useCart } from "../../contexts/useCart";

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const { cartProducts, setCartProducts } = useCart();

  const Detalhes = () => {
    alert("Mais detalhes do produto");
  };

  const Adicionar = () => {
    setCartProducts([...cartProducts, product]);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={logo} alt="Product Image" />
      </div>
      <div className={styles.body}>
        <div className={styles.productName}>
          <strong>{product.name}</strong>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.prodInfo}>
            <span className={styles.price}>R$ {product.preco.toFixed(2)}</span>
            <span className={styles.saibaMais} onClick={() => Detalhes()}>
              Descrição
            </span>
          </div>
          <button className={styles.buttonCard} onClick={Adicionar}>
            <span className={styles.adicionar}>
              <MdAddShoppingCart />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
