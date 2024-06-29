import React, { useState } from "react";
import starIcon from "../img/icons/popular-star.svg";
import popularBasket from "../img/icons/popular-basket.svg";

export default function CoffeeCard({ product, addToBasket }) {
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="popular__item">
      <div className="popular__img">
        <img src={product.image} alt={product.name} />
        <div className="popular__mark">
          <div className="popular__mark-info">
            <span>4.8</span>
            <img src={starIcon} alt="star" />
          </div>
        </div>
      </div>
      <div className="popular__info">
        <h3 className="popular__name">{product.name}</h3>
        <h3 className="popular__price">
          {product.price}
          <span>K</span>
        </h3>
      </div>
      <div className="popular__purchase">
        <div className="popular__purchase-btns">
          <button
            onClick={() => handleClick("button1")}
            className={`popular__temp ${
              activeButton === "button1" ? "active" : ""
            }`}
          >
            <span>Hot</span>
          </button>
          <button
            onClick={() => handleClick("button2")}
            className={`popular__temp ${
              activeButton === "button2" ? "active" : ""
            }`}
          >
            <span>Cold</span>
          </button>
        </div>
        <button
          onClick={() => addToBasket(product)}
          className="popular__basket"
        >
          <img src={popularBasket} alt="basket" />
        </button>
      </div>
    </div>
  );
}
