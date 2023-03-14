import React from 'react';

import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import VideoPlayer from '../VideoPlayer';
import ErrorModal from '../ErrorModal';

import styles from './Popup.module.scss';

const Popup = (props) => {
  const { closePopup, link, formType } = props;

  return (
    <div className={styles.hero}>
      <div className={styles.popupWrapper}>
        {formType == 'login' && <Login />}
        {formType === 'signUp' && <SignUp />}
        {formType === 'error' && <ErrorModal />}
        {formType === 'video' && <VideoPlayer link={link} />}

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
