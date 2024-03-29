import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoImage from '../../assets/img/logo.svg';
import Button from '../Button';
import Popup from '../Popup';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formType = useSelector((state) => state.formType);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoImage} alt="" />
          </Link>
        </div>

        <div className={styles.wrapper} onClick={togglePopup}>
          <Button title="Войти" />
        </div>

        {isOpen && <Popup formType={formType} closePopup={(isOpen) => setIsOpen(isOpen)} />}
      </div>
    </>
  );
};

export default Header;
