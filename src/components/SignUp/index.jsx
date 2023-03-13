import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const dispatch = useDispatch();

  const renderLoginForm = () => {
    console.log('event');
    dispatch(changeForm('login'));
  };

  return (
    <div className={styles.hero}>
      <h2>Регистрация</h2>

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email.."
        autoComplete="off"
        required
      />

      <input type="text" id="name" name="name" placeholder="Имя.." autoComplete="off" required />

      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder="Фамилия.."
        autoComplete="off"
        required
      />

      <input
        type="phone"
        id="phone"
        name="phone"
        placeholder="Телефон.."
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

      <input
        type="password"
        id="repetPassword"
        name="repetPassword"
        placeholder="Повторите пароль.."
        autoComplete="off"
        required
      />

      <div className={styles.button} onClick={() => {}}>
        <Button title="Зарегистрироваться" />
      </div>

      <div className={styles.button} onClick={() => renderLoginForm()}>
        <Button title="Уже есть аккаунт" />
      </div>
    </div>
  );
};

export default SignUp;
