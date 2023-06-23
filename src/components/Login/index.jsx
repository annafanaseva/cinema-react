import React, { createRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';
import Input from '../Input';

import styles from './Login.module.scss';

const Login = () => {
  const [inputType, setInputType] = useState('password');
  const loginRef = createRef();
  const passwordRef = createRef();

  const dispatch = useDispatch();

  const renderSignUpForm = () => {
    dispatch(changeForm('signUp'));
  };

  const makeCorrectType = (type) => {
    setInputType(type);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('login: ' + loginRef.current.value);
    console.log('password: ' + passwordRef.current.value);
  };

  return (
    <div className={styles.hero}>
      <h2>Добро пожаловать</h2>
      <h4>Для входа в личный кабинет введите свой номер телефона и пароль</h4>

      <form className={styles.form}>
        <Input label="Email" type="text" ref={loginRef} />

        <div className={styles.wrapper}>
          <Input label="Пароль" type={inputType} ref={passwordRef} />

          <div
            className={styles.eye}
            onMouseDown={() => makeCorrectType('text')}
            onMouseUp={() => makeCorrectType('password')}
          />
        </div>

        <div className={styles.button} onClick={handleClick}>
          <Button title="Войти" />
        </div>

        <div className={styles.button} onClick={() => renderSignUpForm()}>
          <Button title="Зарегистрироваться" />
        </div>
      </form>
    </div>
  );
};

export default Login;
