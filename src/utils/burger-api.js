const NORMA_API = 'https://norma.nomoreparties.space/api';

export const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
}

export async function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
}
export default NORMA_API;