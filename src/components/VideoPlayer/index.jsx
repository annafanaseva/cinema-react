import styles from './VideoPlayer.module.scss';

const VideoPlayer = (props) => {
  const { link } = props;

  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
