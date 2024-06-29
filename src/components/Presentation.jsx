import React from "react";
import basketIcon from "../img/icons/presentation-basket.svg";
import starIcon from "../img/star.svg";
import coffeeImg from "../img/presentation-coffe.svg";

export default function Presentation() {
  return (
    <div className="presentation__container container">
      <div className="presentation__content">
        <h1 className="presentation__title">
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p className="presentation__text">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <a href="#!" className="presentation__link-order">
          <span>Order now</span>
          <img src={basketIcon} alt="basket" />
        </a>
        <a href="#!" className="presentation__link-menu">
          More menu
        </a>
      </div>
      <div className="presentation__block-container">
        <div className="presentation__block">
          <div className="presentation__img">
            <img src={coffeeImg} alt="coffe" />
          </div>
          <div className="presentation__item presentation__block-item-1">
            <div className="presentation__block-item-sh">
              <span>Cappuccino</span>
            </div>
          </div>
          <div className="presentation__item presentation__block-item-2">
            <div className="presentation__block-item-sh">
              <span>4.8</span>
              <img src={starIcon} alt="star" />
            </div>
          </div>
          <div className="presentation__item presentation__block-item-3">
            <div className="presentation__block-item-sh">
              <span>18K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
