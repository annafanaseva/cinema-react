import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/img/logo.svg';
import Button from '../Button';
import { CITIES } from '../../constants';

import styles from './Header.module.scss';

const Header = ({ onChange }) => {
  const handleCityIdChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === 'Гродно') {
      onChange(5);
    }
    if (event.target.value === 'Минск') {
      onChange(1);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
      </div>

      <select className={styles.select} name="citySelect" onChange={handleCityIdChange}>
        {CITIES &&
          Object.entries(CITIES).map(([city, idx]) => {
            return (
              <option value={city} key={idx}>
                {city}
              </option>
            );
          })}
      </select>

      <div className={styles.wrapper}>
        <Link to="/login">
          <Button title="Войти" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
