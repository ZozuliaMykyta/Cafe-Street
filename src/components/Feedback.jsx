import React from "react";
import { Pagination } from "swiper/modules";
import feedbackImg1 from "../img/feedback-1.jpeg";
import feedbackImg2 from "../img/feedback-2.jpeg";
import feedbackImg3 from "../img/feedback-3.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Feedback() {
  return (
    <div className="feedback__container container">
      <div className="feedback__content">
        <h2 className="feedback__title">What they say about us</h2>
        <p className="feedback__text">
          We always provide the best service and always maintain the quality of
          coffee
        </p>
      </div>
      <div className="feedback__slider">
        <Swiper
          breakpoints={{
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            // when window width is >= 480px
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={3}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg1} alt="Naura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Naura</h3>
                <p className="feedback__about">
                  I really love the cappucino, the coffee was very smooth
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg2} alt="John" />
              <div className="feedback__info">
                <h3 className="feedback__name">John</h3>
                <p className="feedback__about">
                  this coffee shop is very convenient
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg3} alt="Azura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Azura</h3>
                <p className="feedback__about">
                  the coffee menu here is very much
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg2} alt="John" />
              <div className="feedback__info">
                <h3 className="feedback__name">John</h3>
                <p className="feedback__about">
                  this coffee shop is very convenient
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg3} alt="Azura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Azura</h3>
                <p className="feedback__about">
                  the coffee menu here is very much
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg1} alt="Naura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Naura</h3>
                <p className="feedback__about">
                  I really love the cappucino, the coffee was very smooth
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg1} alt="Naura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Naura</h3>
                <p className="feedback__about">
                  I really love the cappucino, the coffee was very smooth
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg2} alt="John" />
              <div className="feedback__info">
                <h3 className="feedback__name">John</h3>
                <p className="feedback__about">
                  this coffee shop is very convenient
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback__slide">
            <div className="feedback__img">
              <img src={feedbackImg3} alt="Azura" />
              <div className="feedback__info">
                <h3 className="feedback__name">Azura</h3>
                <p className="feedback__about">
                  the coffee menu here is very much
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
