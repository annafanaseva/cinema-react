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
        'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:5%7D&extended=true'
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
      <div className={styles.title}>Афиша кино</div>

      {isError && <div className={styles.errorTitle}>Ooops, something went wrong</div>}

      {isLoading ? (
        <Loader />
      ) : films.length ? (
        <div className={styles.wrapper}>
          {films.map(function (film) {
            const { order, acronym, posterLink, eventId, ageLimit } = film;
            return (
              <FilmCard
                key={order}
                title={acronym}
                imgUrl={posterLink}
                id={eventId}
                ageLimit={ageLimit}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.title}>We’ve found no movies, sorry!</div>
      )}
    </>
  );
};

export default FilmCardWrapper;
