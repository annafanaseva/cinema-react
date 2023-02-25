import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/img/logo.svg';
import Button from '../Button';
import { CITIES } from '../../constants';

import styles from './Header.module.scss';

const Header = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
      </div>

      <select className={styles.select} name="citySelect" onChange={handleChange}>
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
