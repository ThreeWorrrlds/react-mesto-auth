import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <a href='#id' onClick={onEditAvatar} className="profile__avatar-edit">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
        </a>
        <div className="profile__information">
          <div className="profile__align">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" onClick={onEditProfile} className="profile__button-edit button-style"></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button type="button" onClick={onAddPlace} className="profile__button-add button-style"></button>
      </section>

      <section className="foto-flow" aria-label="Карточки мест">
        {cards.map(item => (
          <Card card={item}
            key={item._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete} />
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

