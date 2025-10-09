import { MdAddShoppingCart } from "react-icons/md";
import styles from "./Card.module.css";

import logo from "../../assets/logo.png";

export const Card = () => {
  const Detalhes = () => {
    alert("Mais detalhes do produto");
  };
  const Adicionar = () => {
    alert("Produto adicionado ao carrinho");
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={logo} alt="Product Image" />
      </div>
      <div className={styles.body}>
        <div className={styles.productName}>
          <strong>Nome do produto</strong>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.prodInfo}>
            <span className={styles.price}>R$ 0.00</span>
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
