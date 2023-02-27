import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MovieDetail from '../../components/MovieDetail';

import styles from './MovieDescription.module.scss';

const MovieDescription = () => {
  const { id } = useParams();

  const [cityId, setCityId] = useState(1);

  const handleCityIdChange = (cityId) => {
    setCityId(cityId);
  };

  return (
    <div className={styles.wrapper}>
      <Header onChange={handleCityIdChange} />
      <MovieDetail id={id} cityId={cityId} />
    </div>
  );
};

export default MovieDescription;
