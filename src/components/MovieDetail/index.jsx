import { useState, useEffect } from 'react';

import AvaliableCinema from '../AvaliableCinema';

import styles from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { id } = props;

  const [descriptionList, setDescription] = useState([]);

  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const renderAvaliableSessions = (cinema) => {
    console.log(cinema);
    return <AvaliableCinema sessions={cinema} />;
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
        console.log(data);
        setDescription(data);
      });
  }, [id]);

  return (
    <>
      {descriptionList.map((description) => {
        console.log('descriptio', description);
        console.log(description.showList);
        return (
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

            <div className={styles.wrapperAvailiableDate}>
              {description.showList ? (
                Object.keys(description.showList).map((cinema) => {
                  console.log('cinema', cinema);
                  // создать стейт с активной датой, рендер при активной дате, передать inline func,
                  return (
                    <div
                      key={cinema}
                      className={styles.availiableDate}
                      onClick={() => renderAvaliableSessions(description.showList[cinema])}>
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
