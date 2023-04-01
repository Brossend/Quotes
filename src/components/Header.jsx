import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <div className={`row ${styles.header}`}>
      <Link
        to="/quotes/"
        className={`col-2 col-sm-1 col-md-1 col-lg-1 ${styles.nav}`}
      >
        Main
      </Link>
    </div>
  );
}

export default Header;
