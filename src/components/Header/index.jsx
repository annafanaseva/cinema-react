import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/img/logo.svg';
import Button from '../Button';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
      </div>

      <div className={styles.wrapper}>
        <Link to="/login">
          <Button title="Войти" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
