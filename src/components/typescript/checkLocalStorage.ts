import styles from '../CardOfQuote.module.css';

function checkInLocalStorage(id: string) {
  const item: any = document.getElementById(id);

  if (localStorage.getItem(id) === 'true') {
    if (item !== null) {
      item!.classList.add(styles.likeIconActive);
    }
  }
}

export default checkInLocalStorage;
