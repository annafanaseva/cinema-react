import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MovieDetail from '../../components/MovieDetail';

import styles from './MovieDescription.module.scss';

const MovieDescription = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <p className={styles.text}>{id}</p>
      <MovieDetail id={id} />
    </>
  );
};

export default MovieDescription;
