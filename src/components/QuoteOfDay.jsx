import { useEffect, useState } from 'react';

import styles from './QuoteOfDay.module.css';

const API_URL_QUOTEOFDAY = 'https://api.quotable.io/random?tags=';

function QuoteOfDay({ category }) {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL_QUOTEOFDAY + category);
      const quotes = await res.json();
      setQuote(quotes);
    };
    fetchData();
  }, [category]);

  return (
    <div
      className={`col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11 ${styles.container}`}
    >
      <h1 className={styles.content}>{quote.content}</h1>
      <div className={styles.containerDescription}>
        <p className={styles.contentDescription}>Author: {quote.author}</p>
        <p className={styles.contentDescription}>Category: {category}</p>
      </div>
    </div>
  );
}

export default QuoteOfDay;
