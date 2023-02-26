import { Link } from 'react-router-dom';

//import Button from '../Button';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>Титаник</div>
    </div>
  );
};

export default Hero;
