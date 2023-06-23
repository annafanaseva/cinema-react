import React from 'react';

import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  const { type, label } = props;

  return (
    <div className={styles.wrapper}>
      <input ref={ref} className={styles.input} type={type} required></input>
      <label className={styles.label}>
        <span>{label}</span>
      </label>
    </div>
  );
});

export default Input;
