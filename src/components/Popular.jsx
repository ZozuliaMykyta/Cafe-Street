import React from "react";
import CoffeeList from "./CoffeeList";

import coffe1 from "../img/popular-coffee-1.jpeg";
import coffe2 from "../img/popular-coffee-2.jpeg";
import coffe3 from "../img/popular-coffee-3.jpeg";

export default function Popular({ addToBasket }) {
  const products = [
    {
      id: 1,
      name: "Vanilla Latte",
      image: coffe1,
      price: 21,
    },
    {
      id: 2,
      name: "Espresso",
      image: coffe2,
      price: 12,
    },
    {
      id: 3,
      name: "Hazelnut Latte",
      image: coffe3,
      price: 23,
    },
  ];
  return (
    <div className="popular__container container">
      <h2 className="popular__title title">Popular Now</h2>
      <div className="popular__content">
        <CoffeeList addToBasket={addToBasket} products={products} />
      </div>
    </div>
  );
}
