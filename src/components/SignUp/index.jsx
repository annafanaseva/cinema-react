import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';
import Input from '../Input';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const [inputType, setInputType] = useState('password');
  const [repeatInputType, setRepeatInputType] = useState('password');
  const dispatch = useDispatch();

  const makeTextType = (type, repeat) => {
    repeat !== 'repeat' ? setInputType(type) : setRepeatInputType(type);
  };

  const makePasswordType = (type, repeat) => {
    repeat !== 'repeat' ? setInputType(type) : setRepeatInputType(type);
  };

  const renderLoginForm = () => {
    dispatch(changeForm('login'));
  };

  return (
    <div className={styles.hero}>
      <h2>Регистрация</h2>

      <div className={styles.form}>
        <Input label="Email" type="text" />

        <Input label="Имя" type="text" />

        <Input label="Фамилия" type="text" />

        <Input label="Телефон" type="tel" />

        <div className={styles.wrapper}>
          <Input label="Password" type={inputType} />

          <div
            className={styles.eye}
            onMouseDown={() => makeTextType('text')}
            onMouseUp={() => makePasswordType('password')}></div>
        </div>

        <div className={styles.wrapper}>
          <Input label="Password" type={repeatInputType} />

          <div
            className={styles.eye}
            onMouseDown={() => makeTextType('text', 'repeat')}
            onMouseUp={() => makePasswordType('password', 'repeat')}></div>
        </div>

        <div className={styles.button} onClick={() => {}}>
          <Button title="Зарегистрироваться" />
        </div>

        <div className={styles.button} onClick={() => renderLoginForm()}>
          <Button title="Уже есть аккаунт" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
