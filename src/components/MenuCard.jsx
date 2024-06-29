import React from "react";
import starIcon from "../img/icons/popular-star.svg";
import menuBasket from "../img/icons/popular-basket.svg";

export default function MenuCard({ menuItem, addToBasket }) {
  return (
    <div className="menu__item popular__item">
      <div className="menu__img popular__img">
        <img src={menuItem.image} alt={menuItem.name} />
        <div className="menu__mark popular__mark">
          <div className="menu__mark-info popular__mark-info">
            <span>4.8</span>
            <img src={starIcon} alt="star" />
          </div>
        </div>
      </div>
      <div className="menu__info popular__info">
        <h3 className="menu__name popular__name">{menuItem.name}</h3>
        <h3 className="menu__price popular__price">
          {menuItem.price}
          <span>K</span>
        </h3>
      </div>
      <div className="menu__purchase popular__purchase">
        <h6 className="menu__desc">{menuItem.desc}</h6>
        <button
          onClick={() => addToBasket(menuItem)}
          className="menu__basket popular__basket"
        >
          <img src={menuBasket} alt="basket" />
        </button>
      </div>
    </div>
  );
}
