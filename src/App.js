import React, { useState } from "react";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Presentation from "./components/Presentation";
import Basket from "./components/Basket";
import Delivery from "./components/Delivery";
import About from "./components/About";
import Menu from "./components/Menu";
import Feedback from "./components/Feedback";
import Discount from "./components/Discount";

function App() {
  const [basket, setBasket] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);

  const addToBasket = (product) => {
    const checkBasketItems = basket.some((item) => product.id === item.id);

    if (!checkBasketItems) {
      setBasket([...basket, product]);
    }
  };
  const removeFromBasket = (product) => {
    setBasket(basket.filter((item) => item.id !== product.id));
  };

  const toggleBasket = () => {
    setOpenBasket(!openBasket);
  };

  return (
    <div className="wrapper">
      <div className="presentation-block">
        <Header
          toggleBasket={toggleBasket}
          openBasket={openBasket}
          basket={basket}
        />
        <div className="header__info container">
          <Basket
            openBasket={openBasket}
            basket={basket}
            removeFromBasket={removeFromBasket}
          />
        </div>
        <section className="presentation">
          <Presentation />
        </section>
      </div>
      <main className="main">
        <section className="popular main__popular">
          <Popular addToBasket={addToBasket} />
        </section>
        <section className="delivery main__delivery">
          <Delivery />
        </section>
        <section className="about main__about">
          <About />
        </section>
        <section className="menu main__menu">
          <Menu addToBasket={addToBasket} />
        </section>
        <section className="feedback main__feedback">
          <Feedback />
        </section>
        <section className="discount main__discount">
          <Discount />
        </section>
      </main>
    </div>
  );
}

export default App;
