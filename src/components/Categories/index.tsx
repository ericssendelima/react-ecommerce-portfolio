import styles from "./Categories.module.css";
import { useState } from "react";

import { useProducts } from "../../hooks/useProductsContext";
import type { Product } from "../../types";

interface configCategories {
  config: {
    isCategoriesOpen: boolean;
    setIsCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setFilteredItems: React.Dispatch<React.SetStateAction<Product[]>>;
  };
}
export const Categories = ({ config }: configCategories) => {
  const categories: string[] = [
    "Hidratante facial",
    "Limpeza facial",
    "Sabonete facial",
    "Gel facial",
    "Sérum",
    "Protetor solar",
    "Argila",
    "Máscara facial",
    "Sobrancelhas",
    "Acessórios",
    "Maquiagem",
    "Mãos e Pés",
    "Escova",
  ];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const { products } = useProducts();

  const filtering = (categorie: string, index: number): void => {
    setSelectedCategory(index);
    const newObj = products.filter((item) => item.categoria === categorie);
    config.setFilteredItems(newObj);
  };

  const closeFilter = (): void => {
    config.setFilteredItems([...products]);
    config.setIsCategoriesOpen(!config.isCategoriesOpen);
  };

  return (
    <div className={styles.categories}>
      <span onClick={() => closeFilter()}>
        Todos os Produtos
      </span>
      {categories.map((categorie, index) => (
        <span
          key={index}
          className={selectedCategory === index ? styles.activeFilter : ""}
          onClick={() => filtering(categorie, index)}
        >
          {categorie}
        </span>
      ))}
    </div>
  );
};
