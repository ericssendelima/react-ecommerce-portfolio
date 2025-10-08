import styles from './BackToHomeButton.module.css';

import { useNavigate } from 'react-router';

export const BackToHomeButton = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/');
  }
  
  return (
    <div className={styles.backToHomeButton} onClick={handleClick}>
      Voltar
    </div>
  );
};
