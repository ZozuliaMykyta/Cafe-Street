import React from "react";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeList({ products, addToBasket }) {
  return (
    <div className="popular__list">
      {products.map((product) => (
        <CoffeeCard
          addToBasket={addToBasket}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
