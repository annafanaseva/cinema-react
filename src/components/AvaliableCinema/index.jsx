import locationImage from '../../assets/img/location.svg';

import styles from './AvaliableCinema.module.scss';

const AvailiableCinema = (props) => {
  const { sessions } = props;
  const addressSet = new Set();

  sessions.map((session) => {
    addressSet.add(session.theater.address);
  });

  const addressArr = Array.from(addressSet);

  return (
    <>
      <div className={styles.cinema}>
        {Object.values(addressArr).map((cinemaAddress, idx) => {
          return (
            <>
              <div key={idx} className={styles.text}>
                <div className={styles.availiableSessionsWrapper}>
                  <img src={locationImage} alt="" />
                  <div className={styles.cinemaAddress}>{cinemaAddress}</div>

                  <div className={styles.availiableSessions}>
                    {sessions ? (
                      sessions.map((session) => {
                        const { theater, showId, auditorium, start } = session;

                        const minutes =
                          new Date(start).getMinutes() > 9
                            ? new Date(start).getMinutes()
                            : '0' + new Date(start).getMinutes();

                        return (
                          theater.address === cinemaAddress && (
                            <div className={styles.card} key={showId}>
                              <span className={styles.time}>
                                {new Date(start).getHours() + ':' + minutes}
                              </span>

                              <span className={styles.text}>{auditorium.name}</span>
                            </div>
                          )
                        );
                      })
                    ) : (
                      <div className={styles.text}>Доступные сеансы отсутствуют</div>
                    )}
                  </div>
                </div>

                <div className={styles.line} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AvailiableCinema;
