import React from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../store/actions';

import Button from '../Button';

import styles from './ErrorModal.module.scss';

const ErrorModal = () => {
  const dispatch = useDispatch();

  const renderLoginForm = () => {
    dispatch(changeForm('login'));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Пользователь с таким логином уже существует</h2>

        <div className={styles.button} onClick={() => renderLoginForm()}>
          <Button title="Войти" />
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
