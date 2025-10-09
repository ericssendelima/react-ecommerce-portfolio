import { useCart } from "../../hooks/useCart";
import styles from "./SendOrder.module.css";

import { FaWhatsapp } from "react-icons/fa";

export const SendOrder = () => {
  const { cartProducts } = useCart();
  const totalTeste = cartProducts.reduce((acc, product) => {
    return acc + (product.prodTotal * product.quantidade);
  }, 0);

  let texto = `PEDIDO`;

  cartProducts.map((obj) => {
    texto += `
   ${obj.name}
   -  quantidade: ${obj.quantidade}
   -  valor: R$ ${obj.prodTotal.toFixed(2)}

   `;
    return obj;
  });

  texto += `Valor total do pedido: 
  R$ ${totalTeste.toFixed(2)}`;

  function encode(texto: string) {
    return encodeURIComponent(texto).replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }

  const conteudo = encode(texto);

  const url = "https://api.whatsapp.com/send?text=" + conteudo;

  const enviar = () => {
    window.location.href = url;
  };

  return (
    <div className={styles.sendOrder} onClick={enviar}>
      <FaWhatsapp />
      <span>Enviar</span>
    </div>
  );
};
