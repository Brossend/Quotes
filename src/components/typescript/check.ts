function check(id: string) {
  return localStorage.getItem(id) === 'true';
}

export default check;
