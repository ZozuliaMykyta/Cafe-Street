import React from "react";

import coffeeImg from "../img/about-img.jpeg";

export default function About() {
  return (
    <div className="about__container container">
      <div className="about__img">
        <img src={coffeeImg} alt="coffee" />
      </div>
      <div className="about__content">
        <h2 className="about__title title">About us</h2>
        <h3 className="about__sub-title">
          We provide quality coffee, and ready to deliver.
        </h3>
        <p className="about__text">
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <a href="#!" className="about__link">
          Get your coffee
        </a>
      </div>
    </div>
  );
}
