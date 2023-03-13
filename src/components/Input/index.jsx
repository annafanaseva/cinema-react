import styles from './Input.module.scss';

const Input = (props) => {
  const { type, label } = props;

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={type} required></input>
      <label className={styles.label}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Input;
