import React from "react";
import deliveryImg1 from "../img/icons/delivery-1.svg";
import deliveryImg2 from "../img/icons/delivery-2.svg";
import deliveryImg3 from "../img/icons/delivery-3.svg";

export default function Delivery() {
  const deliveryInfo = [
    {
      image: deliveryImg1,
      title: "choose your coffee",
      desc: "there are 20+ coffees for you",
    },
    {
      image: deliveryImg2,
      title: "we delivery it to you",
      desc: "Choose delivery service",
    },
    {
      image: deliveryImg3,
      title: "Enjoy your coffee",
      desc: "Choose delivery service",
    },
  ];
  return (
    <div className="delivery__container container">
      <h2 className="delivery__title title">How to use delivery service</h2>
      <div className="delivery__content">
        {deliveryInfo.map((item, index) => (
          <div className="delivery__item" key={index}>
            <div className="delivery__img">
              <img src={item.image} alt="" />
            </div>
            <h3 className="delivery__sub-title">{item.title}</h3>
            <p className="delivery__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
