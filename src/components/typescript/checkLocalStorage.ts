import styles from '../CardOfQuote.module.css';

function checkInLocalStorage(id: string) {
  const item: any = document.getElementById(id);

  console.log('111');

  if (localStorage.getItem(id) === 'true') {
    if (item !== null) {
      item!.fillStyle = 'tomato';
    }
  }
}

export default checkInLocalStorage;
