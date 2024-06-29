import React from "react";

export default function Discount() {
  return (
    <div className="discount__container container">
      <div className="discount__block">
        <h2 className="discount__title">Subscribe to get 50% discount price</h2>
        <div className="discount__input-wrapper">
          <input
            type="email"
            className="discount__email"
            placeholder="Email address"
          />
          <button className="discount__btn">
            <span>Order now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
