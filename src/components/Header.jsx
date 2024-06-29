import React, { useState } from "react";
import Burger from "./Burger";
import { ReactComponent as BasketIcon } from "../img/icons/basket.svg";

export default function Header({ basket, toggleBasket, openBasket }) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const handleButtonClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  if (burgerOpen && window.innerWidth < 1024) {
    document.querySelector(".main").style.zIndex = "-1";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const changeBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <a href="#!">
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/header-logo.svg`}
              alt="cafe street"
            />
          </a>
        </div>
        <div className="header__taskbar">
          <nav className={`header__nav ${burgerOpen ? "active" : ""}`}>
            <ul className="header__list">
              <li className="header__item" onClick={changeBurger}>
                <a href="#!">About us</a>
              </li>
              <li className="header__item" onClick={changeBurger}>
                <a href="#!">Our Product</a>
              </li>
              <li className="header__item" onClick={changeBurger}>
                <a href="#!">Delivery</a>
              </li>
            </ul>
            <div className="header__order">
              <div className="header__search">
                <input type="text" name="search" placeholder="Cappuccino" />
              </div>
            </div>
          </nav>
          <Burger onButtonClick={handleButtonClick} />
          <div
            onClick={() => toggleBasket()}
            className={`header__basket ${basket.length > 0 ? "active" : ""}`}
          >
            <BasketIcon className="header__basket-img" />
          </div>
          {openBasket && basket.length === 0 && (
            <p className="header__basket-empty">Basket is empty</p>
          )}
        </div>
      </div>
    </header>
  );
}
