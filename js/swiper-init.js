import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});