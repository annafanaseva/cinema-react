import { useDispatch } from 'react-redux';

import Button from '../Button';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const renderSignUpForm = () => {
    dispatch({ type: 'CHANGE_FORM', payload: 'signUp' });
  };

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

      <Button title="Зарегистрироваться" onClick={() => renderSignUpForm()} />
    </div>
  );
};

export default Login;
