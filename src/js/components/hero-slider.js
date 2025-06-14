import Swiper from "swiper";
import { Pagination, Navigation, Controller } from "swiper/modules";

export function heroSlider() {
  const heroSliderMain = new Swiper(".hero-section__hero-slider", {
    modules: [Pagination, Navigation, Controller],
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".custom-btn__hero-slider-next-btn",
      prevEl: ".custom-btn__hero-slider-prev-btn",
    },
    pagination: {
      el: "#hero-slider-pagination-bullets",
      type: "bullets",
      clickable: false,
    },
  });
  const heroSliderFraction = new Swiper(".hero-section__hero-slider", {
    modules: [Pagination, Controller],
    loop: true,
    pagination: {
      el: "#hero-slider-pagination-fraction",
      type: "fraction",
    },
  });
  heroSliderMain.controller.control = heroSliderFraction;
}
