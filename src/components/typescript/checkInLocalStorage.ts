function checkInLocalStorage(id: string) {
  return localStorage.getItem(id) === 'true';
}

export default checkInLocalStorage;
