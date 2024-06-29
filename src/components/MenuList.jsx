import React from "react";
import MenuCard from "./MenuCard";

export default function MenuList({ specialMenu, addToBasket }) {
  return (
    <div className="menu__list">
      {specialMenu.map((menuItem) => (
        <MenuCard
          addToBasket={addToBasket}
          menuItem={menuItem}
          key={menuItem.id}
        />
      ))}
    </div>
  );
}
