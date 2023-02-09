import { useState, useEffect } from 'react';

import AvailiableCinema from '../AvaliableCinema';

import styles from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { id } = props;

  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${id}%22,%22city%22:%221%22%7D&extended=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDescription(data);
      });
  }, [id]);

  return (
    <>
      {description.map((description) => (
        <>
          <div className={styles.wrapper} key={description.eventId}>
            <img className={styles.img} src={description.posterLink} alt="poster" />

            <div className={styles.textWrapper}>
              <p className={styles.title}>
                {description.name}
                <span className={styles.ageLimit}>{description.ageLimit.acronym}</span>
              </p>

              <p className={styles.genres}>
                <span className={styles.genre}>Жанр:</span>
                {description.genres ? (
                  description.genres.map((genre, index) => (
                    <span className={styles.genre} key={genre.id}>
                      {genre.name}

                      {index + 1 === description.genres.length ? <span>.</span> : <span>,</span>}
                    </span>
                  ))
                ) : (
                  <p />
                )}
              </p>

              <p className={styles.genres}>
                <span className={styles.genre}>Год:</span>

                <span className={styles.genre}>
                  {new Date(description.rentalDateStart).getFullYear()}
                </span>
              </p>

              <p className={styles.text}>{description.annotation}</p>

              {description.trailerLink ? (
                <a
                  className={styles.trailerLink}
                  href={description.trailerLink}
                  target="_blank"
                  rel="noreferrer">
                  Посмотреть триллер
                </a>
              ) : (
                <div className={styles.trailerLinkNone}>Триллер отсутствует</div>
              )}
            </div>
          </div>

          <div className={styles.wrapperAvailiableCinema}>
            {description.showList ? (
              Object.keys(description.showList).map((cinema) => (
                <>
                  <div className={styles.title}>{cinema}</div>
                  <AvailiableCinema key={cinema} sessions={description.showList[cinema]} />
                </>
              ))
            ) : (
              <div className={styles.title}>Доступные сеансы отсутствуют</div>
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default MovieDetail;
