import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import QuoteOfDay from './QuoteOfDay';

import styles from './MainPage.module.css';
import '../bootstrap/bootstrap.css';

const API_URL_CATEGORIES = 'https://api.quotable.io/tags';

function MainPage() {
  const [categories, setСategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL_CATEGORIES);
      const props = await res.json();
      setСategories(props);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={`row ${styles.container}`}>
        {categories.map((prop) => (
          <Link
            className={`col-3 col-sm-1 col-md-2 col-lg-2 col-xl-1 ${styles.categories}`}
            to={prop.slug}
          >
            {prop.slug}
          </Link>
        ))}
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <h1
          className={`col-10 col-sm-4 col-md-7 col-lg-6 col-xl-4 ${styles.title}`}
        >
          The best quotes of the day!
        </h1>
        {categories.map((prop, index) => (
          <QuoteOfDay key={index} category={prop.slug} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
