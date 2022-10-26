import React from 'react';

function PopupWithForm({ name, title, buttonTxt, children, isOpen, onClose }) {

  return (
    <div className={`popup popup_type_${name} ${isOpen !== false ? 'popup_opened' : ''} `}>
      <div className="popup__container">
        <h2 className="popup__description">{title}</h2>
        <form className="popup__form" name={`${name}`} autoComplete="off" noValidate>

          {children}

          <button type="submit" className="popup__button-save">{buttonTxt}</button>
        </form>
        <button type="button" onClick={onClose} className="popup__button-close button-style"></button>
      </div>
    </div>
  );

}

export default PopupWithForm;