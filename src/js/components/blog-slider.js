import Swiper from "swiper";
import { Pagination, Controller } from "swiper/modules";

export function blogSlider() {
  const avatarSlider = new Swiper(".blog-side__slider-avatar", {
    modules: [Pagination, Controller],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });

  const textSlider = new Swiper(".blog-side", {
    modules: [Controller],
    slidesPerView: 1,
    loop: true,
  });

  // Sync sliders
  avatarSlider.controller.control = textSlider;
  textSlider.controller.control = avatarSlider;

  // Button to slide
  const nextBtn = document.getElementsByClassName("blog-side__next-button")[0];
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      avatarSlider.slideNext(); // call just one
    });
  }
}
