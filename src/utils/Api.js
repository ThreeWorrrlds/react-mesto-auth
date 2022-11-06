const configApi = {
  urlCards: 'https://mesto.nomoreparties.co/v1/cohort-51/cards',
  urlUser: 'https://nomoreparties.co/v1/cohort-51/users/me',
  urlAvatar: 'https://mesto.nomoreparties.co/v1/cohort-51/users/me/avatar',
  headers: {
    "authorization": '9800edab-c01e-4941-9a81-bb143e90c5b8',
    "content-type": "application/json"
  }
}

export class Api {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка", `${res}`);
  }

  constructor(config) {
    this._urlCards = config.urlCards;
    this._urlAvatar = config.urlAvatar;
    this._urlUser = config.urlUser;
    this._headers = config.headers;
  }

  getAllCards() {
    return fetch(this._urlCards, {
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._urlCards}/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  changeLike(cardId, isLike) {
    return fetch(`${this._urlCards}/${cardId}/likes`, {
      method: isLike ? 'DELETE' : 'PUT',
      headers: this._headers
    })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  changeAvatar(data) {
    return fetch(this._urlAvatar, {
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
    return fetch(this._urlCards, {
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
    return fetch(this._urlUser, { headers: this._headers })
      .then((res) => {
        return this.#onResponce(res);
      })
  }

  sendUserInfoToServer(data) {
    return fetch(this._urlUser, {
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
const api = new Api(configApi);
export { api };