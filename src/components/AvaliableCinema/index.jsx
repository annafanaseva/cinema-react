import styles from './AvaliableCinema.module.scss';

const AvailiableCinema = (props) => {
  const { sessions } = props;

  return (
    <div className={styles.card}>
      {sessions ? (
        sessions.map((session) => (
          <div className={styles.address} key={session.showId}>
            {session.theater.address}
            <span>{session.auditorium.name}</span>
            <span>{session.start}</span>
            <span>hi</span>
          </div>
        ))
      ) : (
        <div className={styles.address}>No availiable sessions</div>
      )}
    </div>
  );
};

export default AvailiableCinema;
