import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// SwiperCore.use([Autoplay]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import classImg from '../assets/english classes.jpg'

const Slidercomp = () => {

  const slidesData = [
    {
      imageUrl: classImg,
      text: 'Batch 1',
      subtext: 'Subtext 1'
    },
    {
      imageUrl: classImg,
      text: 'Batch 2',
      subtext: 'Subtext 2'
    },
    {
      imageUrl: classImg,
      text: 'Batch 3',
      subtext: 'Subtext 3'
    },
    {
      imageUrl: classImg,
      text: 'Batch 4',
      subtext: 'Subtext 4'
    }
  ];
  return (
    <>
      <div>
        {/* <Slider {...settings}>
         {slidesData.map((slide,index)=>(
          <div key={index} className="sliderStyle">
            <img src={slide.imageUrl} alt={slide.text} />
            <h3>{slide.text}</h3>
            <p>{slide.subtext}</p>
          </div>
         ))}
        </Slider> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
              pagination:false
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiperStyle">
                <img src={slide.imageUrl} alt={slide.text} />
                <h3>{slide.text}</h3>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </>
  )
}

export default Slidercomp
