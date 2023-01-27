import { useState, useEffect } from 'react';

import FilmCard from '../FilmCard';

import styles from './FilmCardWrapper.module.scss';

const FilmCardWrapper = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {films.map((film) => (
        <FilmCard
          key={film.order}
          title={film.acronym}
          imgUrl={film.bannerLink}
          id={film.eventId}
        />
      ))}
    </div>
  );
};
export default FilmCardWrapper;
