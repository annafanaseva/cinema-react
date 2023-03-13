import { Link } from 'react-router-dom';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero} />
      <div className={styles.title}>Смотрите мировые кинопремьеры на большом экране</div>
    </div>
  );
};

export default Hero;
