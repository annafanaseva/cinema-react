import { Link } from 'react-router-dom';

import Button from '../Button';

import styles from './FilmCard.module.scss';

const FilmCard = (props) => {
  const { title, imgUrl, id, ageLimit } = props;

  return (
    <div className={styles.card}>
      <div className={styles.acronym}>{ageLimit.acronym}</div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgUrl} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>

      <Link to={`/movie-description/${id}`}>
        <Button title="Купить билет" />
      </Link>
    </div>
  );
};

export default FilmCard;
