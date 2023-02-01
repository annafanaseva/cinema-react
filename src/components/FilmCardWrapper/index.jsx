import { useState, useEffect } from 'react';

import FilmCard from '../FilmCard';
import Loader from '../Loader';

import styles from './FilmCardWrapper.module.scss';

const FilmCardWrapper = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setErrorMessage(false);
      try {
        const res = await fetch(
          'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true'
        );
        const json = await res.json();
        setFilms(json);
      } catch (error) {
        setErrorMessage(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setFilms]);

  return (
    <>
      {errorMessage && <div className={styles.title}>Ooops, something went wrong</div>}
      {isLoading ? (
        <Loader />
      ) : Object.keys(films).length !== 0 ? (
        <div className={styles.wrapper}>
          {films?.map((film) => (
            <FilmCard
              key={film.order}
              title={film.acronym}
              imgUrl={film.bannerLink}
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

// function renderMovies() {
//   if (Object.keys(films).length !== 0) {
//     return (

//     );
//   } else {
//     return (
//       <div className={styles.wrapper}>
//         <h1 className={styles.title}>We’ve found no movies, sorry!</h1>
//       </div>
//     );
//   }
// }

export default FilmCardWrapper;
