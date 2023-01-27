import { useState, useEffect } from 'react';

import styles from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { id } = props;
  const [descriptions, setDescription] = useState([]);

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
      {descriptions.map((description) => (
        <p className={styles.text} key={description.eventId}>
          {description.annotation}
        </p>
      ))}
    </>
  );
};

export default MovieDetail;
