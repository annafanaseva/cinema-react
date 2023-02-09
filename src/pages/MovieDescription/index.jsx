import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MovieDetail from '../../components/MovieDetail';

import styles from './MovieDescription.module.scss';

const MovieDescription = () => {
  const { id } = useParams();

  return (
    <div className={styles.wrapper}>
      <Header />
      <MovieDetail id={id} />
    </div>
  );
};

export default MovieDescription;
