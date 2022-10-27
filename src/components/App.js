import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={(data) => setSelectedCard(data)}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" buttonTxt="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
        <input id="avatar-link" type="url" className="popup__input popup__input_type_avatar-link" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__text-error avatar-link-error"></span>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" buttonTxt="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <input id="profile-name" type="text" className="popup__input popup__input_type_name" name="name"
          placeholder="Введите имя" minLength="2" maxLength="40" required />
        <span className="popup__text-error profile-name-error"></span>
        <input id="profile-description" type="text" className="popup__input popup__input_type_job" name="job"
          placeholder="Ваши увлечения, хобби, род деятельности" minLength="2" maxLength="200" required />
        <span className="popup__text-error profile-description-error"></span>
      </PopupWithForm>

      <PopupWithForm name="place" title="Новое место" buttonTxt="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
        <input id="place-name" type="text" className="popup__input popup__input_type_place-name" name="name"
          placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__text-error place-name-error"></span>
        <input id="place-link" type="url" className="popup__input popup__input_type_place-link" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__text-error place-link-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
