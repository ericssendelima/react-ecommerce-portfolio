import { FaChevronUp } from 'react-icons/fa';
import styles from './ScrollToTopButton.module.css';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={styles.scrollToTopButton} onClick={scrollToTop}>
      <FaChevronUp />
    </div>
  );
}