import React from "react";

export default function BasketItem({ item, removeFromBasket }) {
  return (
    <div className="header__basket-item">
      <img src={item.image} alt={item.name} />
      <div className="header__basket-info">
        <h3>{item.name}</h3>
        <p className="popular__price">
          Price: {item.price}
          <span>K</span>
        </p>
      </div>
      <button
        className="header__basket-btn"
        onClick={() => removeFromBasket(item)}
      >
        Remove
      </button>
    </div>
  );
}
