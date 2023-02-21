import { useState, useEffect } from 'react';

import AvaliableCinema from '../AvaliableCinema';
import { monthNames } from '../../constants';

import styles from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { id } = props;

  const [descriptionList, setDescription] = useState([]);

  const [sessionDate, setSessionDate] = useState();

  const renderAvaliableSessions = (cinema) => {
    console.log(cinema);
    setSessionDate(cinema);
    <AvaliableCinema sessions={sessionDate} />;
  };

  // const renderSessions = (cinema) => () => {
  //   console.log(cinema);
  // };

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
      {descriptionList.map((description) => {
        const {
          eventId,
          posterLink,
          ageLimit,
          genres,
          rentalDateStart,
          annotation,
          trailerLink,
          showList
        } = description;

        return (
          <>
            <div className={styles.wrapper} key={eventId}>
              <img className={styles.img} src={posterLink} alt="poster" />

              <div className={styles.textWrapper}>
                <p className={styles.title}>
                  {description.name}
                  <span className={styles.ageLimit}>{ageLimit.acronym}</span>
                </p>

                <p className={styles.genres}>
                  <span className={styles.genre}>Жанр:</span>
                  {genres &&
                    genres.map((genre, index) => (
                      <span className={styles.genre} key={genre.id}>
                        {genre.name}

                        {index + 1 === genres.length ? <span>.</span> : <span>,</span>}
                      </span>
                    ))}
                </p>

                <p className={styles.genres}>
                  <span className={styles.genre}>Год:</span>

                  <span className={styles.genre}>{new Date(rentalDateStart).getFullYear()}</span>
                </p>

                <p className={styles.text}>{annotation}</p>

                {trailerLink && (
                  <a
                    className={styles.trailerLink}
                    href={trailerLink}
                    target="_blank"
                    rel="noreferrer">
                    Посмотреть трейлер
                  </a>
                )}
              </div>
            </div>

            <div className={styles.wrapperAvailiableDate}>
              {showList ? (
                Object.keys(showList).map((cinema) => {
                  // создать стейт с активной датой, рендер при активной дате, передать inline func,
                  return (
                    <div
                      key={cinema}
                      className={styles.availiableDate}
                      onClick={() => renderAvaliableSessions(showList[cinema])}>
                      {new Date(cinema).getDate() + ' ' + monthNames[new Date(cinema).getMonth()]}
                    </div>
                  );
                })
              ) : (
                <div className={styles.title}>Доступные сеансы отсутствуют</div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default MovieDetail;
