import React from "react";
import BasketItem from "./BasketItem";

export default function Basket({ basket, removeFromBasket, openBasket }) {
  return (
    <div
      className={`header__basket-list ${
        basket.length > 0 && openBasket ? "active" : ""
      }`}
    >
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          removeFromBasket={removeFromBasket}
        />
      ))}
    </div>
  );
}
