import styles from "./Card.module.css";
import { MdAddShoppingCart } from "react-icons/md";

import logo from "../../assets/logo.png";
import type { Product } from "../../types";
import { useCart } from "../../hooks/useCart";
import { useValidatedImage } from "../../hooks/useValidatedImage";

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const imageSrc = useValidatedImage(product.image, logo);

  const { cartProducts, setCartProducts } = useCart();

  const Details = () => {
    alert("Mais detalhes do produto");
  };

  const Add = () => {
    setCartProducts([...cartProducts, product]);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={imageSrc} alt={product.name} />
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
            <span className={styles.saibaMais} onClick={() => Details()}>
              Descrição
            </span>
          </div>
          <button className={styles.buttonCard} onClick={Add}>
            <span className={styles.adicionar}>
              <MdAddShoppingCart />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
