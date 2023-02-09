import { useState, useEffect } from 'react';

import FilmCard from '../FilmCard';
import Loader from '../Loader';

import styles from './FilmCardWrapper.module.scss';

const FilmCardWrapper = () => {
  const [films, setFilms] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(
        'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true'
      );

      const json = await res.json();

      setFilms(json);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isError && <div className={styles.title}>Ooops, something went wrong</div>}

      {isLoading ? (
        <Loader />
      ) : films.length ? (
        <div className={styles.wrapper}>
          {films.map((film) => (
            <FilmCard
              key={film.order}
              title={film.acronym}
              imgUrl={film.posterLink}
              id={film.eventId}
            />
          ))}
        </div>
      ) : (
        <div className={styles.title}>We’ve found no movies, sorry!</div>
      )}
    </>
  );
};

export default FilmCardWrapper;
