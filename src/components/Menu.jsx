import React from "react";

import specialProduct1 from "../img/menu-1.jpeg";
import specialProduct2 from "../img/menu-2.jpeg";
import specialProduct3 from "../img/menu-3.jpeg";
import specialProduct4 from "../img/menu-4.jpeg";
import specialProduct5 from "../img/menu-5.jpeg";
import specialProduct6 from "../img/menu-6.jpeg";
import MenuList from "./MenuList";

export default function Menu({ addToBasket }) {
  const specialMenu = [
    {
      id: 1,
      name: "Sandwich",
      desc: "bread with meat and vegetables",
      image: specialProduct1,
      price: 12,
    },
    {
      id: 2,
      name: "Hot Milk",
      desc: "Hot Milk with less sugar",
      image: specialProduct2,
      price: 12,
    },
    {
      id: 3,
      name: "Coffe Ice Cream",
      desc: "Coffe with ice cream vanilla",
      image: specialProduct3,
      price: 12,
    },
    {
      id: 4,
      name: "Cappucino",
      desc: "Hot Cappucino",
      image: specialProduct4,
      price: 12,
    },
    {
      id: 5,
      name: "Moccacinno",
      desc: "Hot Moccacino",
      image: specialProduct5,
      price: 12,
    },
    {
      id: 6,
      name: "Hot Moccacino ",
      desc: "Wafle with Ice cream",
      image: specialProduct6,
      price: 12,
    },
  ];
  return (
    <div className="menu__container container">
      <h2 className="menu__title title">Special menu for you</h2>
      <div className="menu__content">
        <MenuList addToBasket={addToBasket} specialMenu={specialMenu} />
      </div>
    </div>
  );
}
