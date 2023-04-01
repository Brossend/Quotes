import styles from '../CardOfQuote.module.css';

function likeInLocalStorage(id: string) {
  const item: any = document.getElementById(id);

  if (localStorage.getItem(id) === null) {
    localStorage.setItem(id, 'true');
    item!.classList.add(styles.likeIconActive);
    item!.classList.remove(styles.likeIcon);
  } else {
    localStorage.removeItem(id);
    item!.classList.remove(styles.likeIconActive);
    item!.classList.add(styles.likeIcon);
  }
}

export default likeInLocalStorage;
