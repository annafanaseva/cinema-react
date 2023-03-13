import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';
import Input from '../Input';

import styles from './Login.module.scss';

const Login = () => {
  const [inputType, setInputType] = useState('password');
  const dispatch = useDispatch();

  const renderSignUpForm = () => {
    dispatch(changeForm('signUp'));
  };

  const makeTextType = (type) => {
    setInputType(type);
  };

  const makePasswordType = (type) => {
    setInputType(type);
  };

  return (
    <div className={styles.hero}>
      <h2>Добро пожаловать</h2>
      <h4>Для входа в личный кабинет введите свой номер телефона и пароль</h4>

      <div className={styles.form}>
        <Input label="Email" type="text" />

        <div className={styles.wrapper}>
          <Input label="Password" type={inputType} />

          <div
            className={styles.eye}
            onMouseDown={() => makeTextType('text')}
            onMouseUp={() => makePasswordType('password')}></div>
        </div>

        <div className={styles.button} onClick={() => {}}>
          <Button title="Войти" />
        </div>

        <div className={styles.button} onClick={() => renderSignUpForm()}>
          <Button title="Зарегистрироваться" />
        </div>
      </div>
    </div>
  );
};

export default Login;
