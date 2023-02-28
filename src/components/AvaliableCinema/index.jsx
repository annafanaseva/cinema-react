import styles from './AvaliableCinema.module.scss';

const AvailiableCinema = (props) => {
  const { sessions } = props;
  return (
    <>
      {sessions ? (
        sessions.map((session) => {
          const { theater, showId, auditorium, start } = session;

          return (
            <div className={styles.card} key={showId}>
              <span className={styles.time}>
                {new Date(start).getHours() + ':' + new Date(start).getMinutes()}
              </span>
              <span className={styles.address}>{auditorium.name}</span>
              <div className={styles.address}>{theater.address}</div>
            </div>
          );
        })
      ) : (
        <div className={styles.address}>No availiable sessions</div>
      )}
    </>
  );
};

export default AvailiableCinema;
