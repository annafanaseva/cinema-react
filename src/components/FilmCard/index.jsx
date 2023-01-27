import { Link } from 'react-router-dom';

import Button from '../Button';

import styles from './FilmCard.module.scss';

const FilmCard = (props) => {
  const { title, imgUrl, id } = props;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <p className={styles.title}>{title}</p>

      <Link to={`/movie-description/${id}`}>
        <Button title={'Buy ticket'} />
      </Link>
    </div>
  );
};

export default FilmCard;
