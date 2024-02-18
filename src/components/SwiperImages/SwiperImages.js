import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import logo from "../../assets/lion.jpg";
import brand from "../../assets/brand.jpg";
import {
  EffectCards,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  Navigation,
  Pagination,
} from "swiper/modules";
import "./SwiperImages.scss";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";

function SwiperImages() {
  const swiperImagesConfig = {
    component: "swiperimages",
    swiperStyle: "default",
    images: [
      { url: logo, alt: "lion", link: "/" },
      { url: brand, alt: "brand", link: "/" },
      { url: logo, alt: "lion", link: "/" },
    ],
  };
  return (
    <div
      className={`swiper-banner py-2 swiper-system-${swiperImagesConfig?.swiperStyle}`}
    >
      <Swiper
        effect={swiperImagesConfig?.swiperStyle}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[
          EffectCards,
          EffectFade,
          EffectCube,
          EffectCoverflow,
          EffectFlip,
          Navigation,
          Pagination,
        ]}
        className="mySwiper"
      >
        {swiperImagesConfig?.images?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={image.link}>
                <img
                  className="rounded-3"
                  src={image.url}
                  alt={image.alt}
                  width="100%"
                  style={
                    swiperImagesConfig?.swiperStyle !== "fade"
                      ? { maxWidth: "200px", maxHeight: "500px" }
                      : { maxWidth: "100%", maxHeight: "500px" }
                  }
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export { SwiperImages };
