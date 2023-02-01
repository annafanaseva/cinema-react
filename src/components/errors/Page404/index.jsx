import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Page404.module.scss';

function Page404() {
  return (
    <>
      <h1 className={styles.title}>404 not found, we have no such page</h1>
      <hr />
      <div className={styles.title}>
        <p>
          <Link to="/">Go to home page</Link>
        </p>
      </div>
    </>
  );
}

export default Page404;
