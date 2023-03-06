import Login from '../../components/Login';

import styles from './Popup.module.scss';

const Popup = (props) => {
  const { closePopup } = props;

  return (
    <div className={styles.hero}>
      <div className={styles.popupWrapper}>
        <Login />

        <div
          onClick={() => {
            closePopup(false);
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

export default Popup;