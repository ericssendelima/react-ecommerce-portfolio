import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
      <span>Siga-nos </span>
        <a rel="Lira's Instagram" href="https://www.instagram.com/u.ericssen">
          <FaInstagram />
        </a>
      </div>

      <div className={styles.logoFooter}>
        <img src={logo} alt="logo"/>
      </div>
      <p className={styles.pFooter}>
        Copyright Lira's Cosméticos - 2024
      </p>
    </footer>
  );
};
