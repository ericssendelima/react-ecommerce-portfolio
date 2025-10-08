import { FaWhatsapp } from "react-icons/fa";
import styles from "./SendOrder.module.css";

export const SendOrder = () => {
  let texto = `PEDIDO`;

  // context.map((obj) => {
  //   texto += `
  //  ${obj.name}
  //  -  quantidade: ${obj.quantidadeEpi}
  //  -  valor: R$ ${obj.prodTotal.toFixed(2)}

  //  `;
  //   return obj;
  // });

  texto += `Valor total do pedido: `;
  // R$ ${totalTeste.toFixed(2)}`;

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
