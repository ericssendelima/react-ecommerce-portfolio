import styles from "./CardCart.module.css";
import { useState } from "react";

import logo from "../../assets/logo.png";
import { ImBin } from "react-icons/im";

import type { Product } from "../../types";
import { useCart } from "../../hooks/useCart";
import { useValidatedImage } from "../../hooks/useValidatedImage";
import { Description } from "../Description";

interface CardProduct {
  product: Product;
}

export const CardCart = ({ product }: CardProduct) => {
  const imageSrc = useValidatedImage(product.image, logo);

  const { setCartProducts } = useCart();
  const [quantity, setQuantity] = useState(product.quantidade);
  const [openDescription, setOpenDescription] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      RemoveProduct();
    } else {
      setQuantity(newQuantity);
      setCartProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id ? { ...item, quantidade: newQuantity } : item
        )
      );
    }
  };

  const RemoveProduct = () => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

   const Details = () => {
    setOpenDescription(!openDescription);
  };
  return (
    <div className={styles.cardCart}>
      <div className={styles.cardBody}>
        <img src={imageSrc} alt={product.name} />

        <div className={styles.infoBody}>
          <h5 className={styles.prodName}>{product.name}</h5>
          <h6 className={styles.valorProd}>R$ {product.preco.toFixed(2)}</h6>

          <div className={styles.controlsContainer}>
            <div className={styles.controls}>
              <div
                className={styles.quantityControl}
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </div>
              <p className={styles.quantity}>{quantity}</p>
              <div
                className={styles.quantityControl}
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </div>
            </div>
            <span className={styles.saibaMais} onClick={() => Details()}>
              Descrição
            </span>

            <div
              className={styles.removeButton}
              onClick={() => RemoveProduct()}
            >
              <ImBin />
            </div>
          </div>
        </div>
      </div>
      {openDescription && (
              <Description
                product={product}
                componentControls={{ openDescription, setOpenDescription }}
              />
            )}
    </div>
  );
};
