// Locomotive Scroll
const locomotiveScroll = new LocomotiveScroll();

// Swiper
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

// Scroll Reveal
ScrollReveal().reveal('.hero__image', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#value_1', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#value_2', { duration: 750, delay: 300, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#value_3', { duration: 750, delay: 300, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#value_4', { duration: 750, delay: 200, origin: "bottom", distance: "25px" });
  
ScrollReveal().reveal('#provide_1', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#provide_2', { duration: 750, delay: 200, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('#provide_3', { duration: 750, delay: 300, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.blog_1', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.blog_2', { duration: 750, delay: 200, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.blog_3', { duration: 750, delay: 300, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.story', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.reminder__text', { duration: 750, delay: 100, origin: "bottom", distance: "25px" });

ScrollReveal().reveal('.default__button', { duration: 750, delay: 200, origin: "bottom", distance: "25px" });