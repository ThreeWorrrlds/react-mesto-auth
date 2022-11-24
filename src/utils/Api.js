export const BASE_URL = 'https://mesto.nomoreparties.co/v1/cohort-51';

export class Api {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка", `${res}`);
  }

  constructor(baseUrl, headers) {
    this._headers = headers.headers;
    this._baseUrl = baseUrl;
  }

  getAllCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  changeLike(cardId, isLike) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLike ? 'DELETE' : 'PUT',
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  createUserCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  sendUserInfoToServer(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }
}
const api = new Api(BASE_URL,
  {
    headers: {
      "authorization": '9800edab-c01e-4941-9a81-bb143e90c5b8',
      "content-type": "application/json"
    }
  });
export { api };