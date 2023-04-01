import likeInLocalStorage from './typescript/likeInLocalStorage.ts';
import check from './typescript/checkInLocalStorage.js';

import styles from './CardOfQuote.module.css';
import { ReactComponent as Like } from '../img/heart-02-svgrepo-com.svg';

function CardOfQuote({ prop }) {
  return (
    <div
      className={`col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11 ${styles.container}`}
    >
      <h1 className={` ${styles.content}`}>{prop.content}</h1>
      <p className={`${styles.contentDescription}`}>Author: {prop.author}</p>

      {check(prop._id) ? (
        <button
          className={`${styles.likeButton}`}
          onClick={() => likeInLocalStorage(prop._id)}
        >
          <Like
            id={prop._id}
            className={styles.likeIconActive}
            height="50"
            width="50"
          />
        </button>
      ) : (
        <button
          className={`${styles.likeButton}`}
          onClick={() => likeInLocalStorage(prop._id)}
        >
          <Like
            id={prop._id}
            className={styles.likeIcon}
            height="50"
            width="50"
          />
        </button>
      )}
    </div>
  );
}

export default CardOfQuote;
