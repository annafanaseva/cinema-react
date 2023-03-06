import Button from '../Button';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.hero}>
      <h2>Добро пожаловать</h2>
      <h4>Для входа в личный кабинет введите свой номер телефона и пароль</h4>

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

      <Button title="Войти" />
    </div>
  );
};

export default Login;
