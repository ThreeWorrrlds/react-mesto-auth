import React from 'react';

function Card({ card, onCardClick }) {

  const handleCardClick = () => {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img src={card.link} alt="фотография места" className="card__photo" onClick={handleCardClick} />
      <div className="card__description-group">
        <h2 className="card__place-name">{card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like"></button>
          <span className="card__likescounter">{card.likes.length}</span>
        </div>
        <button type="button" className="card__trash button-style"></button>
      </div>
    </article>
  );

}
export default Card; 