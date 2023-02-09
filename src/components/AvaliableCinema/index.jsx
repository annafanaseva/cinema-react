import styles from './AvaliableCinema.module.scss';

const AvailiableCinema = (props) => {
  const { name, address, auditorium } = props;

  return (
    <div className={styles.card}>
      <p className={styles.title}>{name}</p>
      <p className={styles.title}>{address}</p>
      <p className={styles.title}>{auditorium}</p>
      <p>hi</p>
    </div>
  );
};

export default AvailiableCinema;
