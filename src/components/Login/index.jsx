import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';

import styles from './Login.module.scss';

const Login = () => {
  const [formType, setFormType] = useState('');

  const dispatch = useDispatch();

  const renderSignUpForm = () => {
    console.log('event');
    dispatch(changeForm('signUp'));
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
      <div className={styles.button} onClick={() => {}}>
        <Button title="Войти" />
      </div>

      <div className={styles.button} onClick={() => renderSignUpForm()}>
        <Button title="Зарегистрироваться" />
      </div>
    </div>
  );
};

export default Login;
