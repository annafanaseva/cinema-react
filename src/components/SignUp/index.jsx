import Button from '../Button';

import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={styles.hero}>
      <h2>Регистрация</h2>

      <input
        type="text"
        id="username"
        name="username"
        placeholder="Логин.."
        autoComplete="off"
        required
      />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Пароль.."
        autoComplete="off"
        required
      />

      <Button title="Зарегистрироваться" />
    </div>
  );
};

export default SignUp;
