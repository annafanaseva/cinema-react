import React, { useState, useEffect } from 'react';

import AvaliableCinema from '../AvaliableCinema';
import VideoPopup from '../VideoPopup';
import { monthNames } from '../../constants';
import { CITIES } from '../../constants';

import styles from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { id } = props;

  const [descriptionList, setDescription] = useState([]);

  const [sessionDateList, setSessionDateList] = useState([]);

  const [cityId, setCityId] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const handleCityIdChange = (event) => {
    setSessionDateList([]);
    Object.keys(CITIES).map((city) => {
      if (event.target.value === city) {
        setCityId(CITIES[city]);
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${id}%22,%22city%22:%22${cityId}%22%7D&extended=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDescription(data);
      });
  }, [id, cityId]);

  return (
    <>
      {descriptionList.map((description) => {
        const {
          eventId,
          posterLink,
          bannerLink,
          ageLimit,
          genres,
          rentalDateStart,
          annotation,
          trailerLink,
          language,
          showList
        } = description;

        const youTubeTrailer = trailerLink.split('v=').pop();

        const togglePopup = () => {
          setIsOpen(!isOpen);
        };

        return (
          <>
            <div className={styles.hero}>
              <img className={styles.backgroundImg} src={bannerLink} alt="banner" />

              <div className={styles.heroWrapper}>
                <div className={styles.heroTextWrapper}>
                  <span className={styles.filmName}>{description.name}</span>

                  <p className={styles.detail}>
                    <span className={styles.genre}>Жанр:</span>
                    {genres &&
                      genres.map((genre, idx) => (
                        <span className={styles.genre} key={genre.id}>
                          {genre.name}

                          {idx + 1 !== genres.length && <span>,</span>}
                        </span>
                      ))}
                  </p>

                  <p className={styles.detail}>
                    <span className={styles.genre}>Год:</span>

                    <span className={styles.genre}>{new Date(rentalDateStart).getFullYear()}</span>
                  </p>

                  <p className={styles.detail}>
                    <span className={styles.language}>{language[0].acronym}</span>
                  </p>
                </div>

                {trailerLink && (
                  <div className={styles.videoPreview} onClick={togglePopup}>
                    <div className={styles.videoPlay}>
                      <svg id="svg-icon-play-video" viewBox="0 0 14 14" width="100%" height="100%">
                        <path fill="#fff" d="M1,1 L12,7 L1,13"></path>
                      </svg>
                    </div>

                    <img
                      src={`http://img.youtube.com/vi/${youTubeTrailer}/maxresdefault.jpg`}
                      alt=""
                    />
                  </div>
                )}

                {isOpen && (
                  <VideoPopup link={youTubeTrailer} closePopup={(isOpen) => setIsOpen(isOpen)} />
                )}
              </div>

              <span className={styles.ageLimit}>{ageLimit.acronym}</span>
            </div>

            <div className={styles.wrapper} key={eventId}>
              <img className={styles.img} src={posterLink} alt="poster" />

              <div className={styles.textWrapper}>
                <p className={styles.text}>{annotation}</p>
              </div>
            </div>

            <select className={styles.select} name="citySelect" onChange={handleCityIdChange}>
              {CITIES &&
                Object.entries(CITIES).map(([city, idx]) => {
                  return (
                    <option value={city} key={idx}>
                      {city}
                    </option>
                  );
                })}
            </select>

            <div className={styles.wrapperAvailiableDate}>
              {showList ? (
                Object.keys(showList).map((date, idx) => {
                  return (
                    <div
                      key={idx}
                      className={styles.availiableDate}
                      onClick={() => setSessionDateList(showList[date])}>
                      {new Date(date).getDate() + ' ' + monthNames[new Date(date).getMonth()]}
                    </div>
                  );
                })
              ) : (
                <div className={styles.text}>Доступные сеансы отсутствуют</div>
              )}
            </div>

            <div className={styles.wrapperAvailiableSession}>
              <AvaliableCinema sessions={sessionDateList} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default MovieDetail;
