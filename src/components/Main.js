import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfoFromServer()
      .then((dataUser) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
      })
      .catch((err) => {
        console.log('Данные не получены', err);
      })
  }, []);

  React.useEffect(() => {
    api.getAllCards()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch((err) => {
        console.log('Данные не получены', err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <a href='#id' onClick={onEditAvatar} className="profile__avatar-edit">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </a>
        <div className="profile__information">
          <div className="profile__align">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" onClick={onEditProfile} className="profile__button-edit button-style"></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" onClick={onAddPlace} className="profile__button-add button-style"></button>
      </section>

      <section className="foto-flow" aria-label="Карточки мест">
        {cards.map(item => (
          <Card card={item}
            key={item._id}
            onCardClick={onCardClick} />
        ))}
      </section>

      <div className="popup popup-allow-delete">
        <form className="popup__container">
          <h2 className="popup__description description-allow-delete">Вы уверены?</h2>
          <button type="submit" className="popup__button-save popup__button-save_card_delete">Да</button>
          <button type="button" className="popup__button-close button-style"></button>
        </form>
      </div>

    </main>
  );

}

export default Main;

