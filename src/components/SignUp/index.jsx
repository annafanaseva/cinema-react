import React, { createRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';
import Input from '../Input';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const [inputType, setInputType] = useState('password');
  const [repeatInputType, setRepeatInputType] = useState('password');
  const dispatch = useDispatch();

  const loginRef = createRef();
  const nameRef = createRef();
  const lastnameRef = createRef();
  const telRef = createRef();
  const passwordRef = createRef();
  const repeatPasswordRef = createRef();

  const makeCorrectType = (type, repeat) => {
    repeat !== 'repeat' ? setInputType(type) : setRepeatInputType(type);
  };

  const renderLoginForm = () => {
    dispatch(changeForm('login'));
  };

  const renderErrorModal = () => {
    dispatch(changeForm('error'));
  };

  const storage = window.localStorage;

  const handleClick = (event) => {
    event.preventDefault();

    const user = {
      isAuth: false,
      login: loginRef.current.value,
      name: nameRef.current.value,
      lastname: lastnameRef.current.value,
      tel: telRef.current.value,
      password: passwordRef.current.value,
      repeatPassword: repeatPasswordRef.current.value
    };

    user.password !== user.repeatPassword && alert('Пароли не совпадают');

    !localStorage.getItem(user.login)
      ? storage.setItem(loginRef.current.value, JSON.stringify(user))
      : renderErrorModal();
  };

  return (
    <div className={styles.hero}>
      <h2>Регистрация</h2>

      <form className={styles.form}>
        <Input label="Email" type="text" ref={loginRef} />

        <Input label="Имя" type="text" ref={nameRef} />

        <Input label="Фамилия" type="text" ref={lastnameRef} />

        <Input label="Телефон" type="tel" ref={telRef} />

        <div className={styles.wrapper}>
          <Input label="Пароль" type={inputType} ref={passwordRef} />

          <div
            className={styles.eye}
            onMouseDown={() => makeCorrectType('text')}
            onMouseUp={() => makeCorrectType('password')}
          />
        </div>

        <div className={styles.wrapper}>
          <Input label="Повторите пароль" type={repeatInputType} ref={repeatPasswordRef} />

          <div
            className={styles.eye}
            onMouseDown={() => makeCorrectType('text', 'repeat')}
            onMouseUp={() => makeCorrectType('password', 'repeat')}
          />
        </div>

        <div className={styles.button} onClick={handleClick}>
          <Button title="Зарегистрироваться" />
        </div>

        <div className={styles.button} onClick={() => renderLoginForm()}>
          <Button title="Уже есть аккаунт" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
