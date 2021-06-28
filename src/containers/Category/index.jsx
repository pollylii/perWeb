import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore,  { EffectCoverflow,Pagination, Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.scss"
import './index.scss';


// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

class Category extends React.Component {

  render() {
    return (
      <div className="category">
        {/* <Swiper 
            className="mySwiper"
            slidesPerView={1} 
            spaceBetween={10} 
            pagination={{ "clickable": true }} 
            breakpoints={{
              "@0.00": {
                "slidesPerView": 1,
                "spaceBetween": 10
              },
              "@0.75": {
                "slidesPerView": 2,
                "spaceBetween": 20
              },
              "@1.00": {
                "slidesPerView": 3,
                "spaceBetween": 40
              },
              "@1.50": {
                "slidesPerView": 4,
                "spaceBetween": 50
              }
            }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper> */}
        {/* <Swiper effect="fade">
            {[1, 2, 3].map((i, el) => {
              return <SwiperSlide>Slide {el}</SwiperSlide>;
            })}
          </Swiper> */}
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
          coverflowEffect={{ "rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": true }}
          className="mySwiper" navigation={true} pagination={{ "type": "fraction" }} 
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=""/>
          </SwiperSlide>
        </Swiper>

      </div>
    )
  }
}

export default Category;