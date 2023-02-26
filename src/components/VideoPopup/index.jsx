//import Button from '../Button';

import styles from './VideoPopup.module.scss';

const VideoPopup = (props) => {
  const { link } = props;

  return (
    <div className={styles.hero}>
      <div className={styles.videoWrapper}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <div
          onClick={() => {
            props.closePopup(false);
          }}
          className={styles.cross}>
          <svg id="svg-icon-close" viewBox="0 0 28 22" width="100%" height="100%">
            <path
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              d="M1,1 L21,21 M21,1 L1,21"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
