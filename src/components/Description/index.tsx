import styles from "./Description.module.css";
import type { Product } from "../../types";

import { IoClose } from "react-icons/io5";

import logo from "../../assets/logo.png";
import { useValidatedImage } from "../../hooks/useValidatedImage";

interface DescriptionProps {
  product: Product;
  componentControls: {
    openDescription: boolean;
    setOpenDescription: (open: boolean) => void;
  };
}

export const Description = ({
  product,
  componentControls,
}: DescriptionProps) => {
  const imageSrc = useValidatedImage(product.image, logo);

  const closeComponent = () => {
    componentControls.setOpenDescription(!componentControls.openDescription);
  };
  return (
    <div className={styles.description}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={() => closeComponent()}>
          <IoClose />
        </button>
      </div>

      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={product.name} />
      </div>
      <div className={styles.descriptionBody}>
        <h4>{product.name}</h4>
        <h5>R$ {product.preco.toFixed(2)}</h5>
        <h6>Descrição:</h6>
        <p>{product.descricao}</p>
      </div>
    </div>
  );
};
