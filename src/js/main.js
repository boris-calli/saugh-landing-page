import { dropdownMenu } from "./components/dropdown-menu.js";
import { scrollSpyMenu } from "./components/scrollspy.js";
import { creativeCardHover } from "./components/creative-hover-card.js";
import { blogSlider } from "./components/blog-slider.js";
import { heroSlider } from "./components/hero-slider.js";

document.addEventListener("DOMContentLoaded", () => {
  dropdownMenu();
  scrollSpyMenu();
  creativeCardHover();
  blogSlider();
  heroSlider();
});
