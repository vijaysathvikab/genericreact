import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./SwiperBanner.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OverlaySlide from "../BannerSlides/OverlaySlide";
import BasicSlide from "../BannerSlides/BasicSlide";
import HorizontalSlide from "../BannerSlides/HorizontalSlide";

function SwiperBanner() {
  const swiperBannerConfig = {
    component: "swiperBanner",
    slides: [
      {
        slideType: "left-overlay",
        heading: "Heading 1",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/lion.jpg",
      },
      {
        slideType: "right-overlay",
        heading: "Heading 2",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/brand.jpg",
      },
      {
        slideType: "basic-bottom-image",
        heading: "Heading 2",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/brand.jpg",
      },
      {
        slideType: "horizontal-right-image",
        heading: "Heading 2",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/brand.jpg",
      },
      {
        slideType: "horizontal-left-image",
        heading: "Heading 2",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/brand.jpg",
      },
      {
        slideType: "image",
        heading: "Heading 2",
        body: "This is the body and can be large.",
        ctaLabel: "Button",
        ctaLink: "/",
        imageUrl: "/assets/brand.jpg",
      },
    ],
  };
  return (
    <div className="swiper-banner py-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperBannerConfig?.slides?.map((slide, index) => {
          if (slide?.slideType.includes("overlay")) {
            return (
              <SwiperSlide key={index}>
                <OverlaySlide config={slide} key={index} />
              </SwiperSlide>
            );
          } else if (slide?.slideType.includes("horizontal")) {
            return (
              <SwiperSlide key={index}>
                <HorizontalSlide config={slide} key={index} />
              </SwiperSlide>
            );
          } else if (slide?.slideType.includes("basic")) {
            return (
              <SwiperSlide key={index}>
                <BasicSlide config={slide} key={index} />
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={index}>
                <OverlaySlide config={slide} key={index} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

export default SwiperBanner;
