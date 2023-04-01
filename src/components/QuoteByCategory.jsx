import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CardOfQuote from './CardOfQuote';

import styles from './QuoteByCategory.module.css';

const API_URL = 'https://api.quotable.io/quotes/random?tags=';
const LIMIT = '&limit=50';

function QuoteByCategory() {
  const { category } = useParams();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL + category + LIMIT);
      const props = await res.json();
      setQuotes(props);
    };
    fetchData();
  }, [category]);

  return (
    <div className={`row ${styles.container}`}>
      <h1
        className={`col-10 col-sm-4 col-md-7 col-lg-6 col-xl-4 ${styles.title}`}
      >
        {category}
      </h1>
      {quotes.map((prop, index) => {
        return <CardOfQuote prop={prop} key={index} />;
      })}
    </div>
  );
}

export default QuoteByCategory;
