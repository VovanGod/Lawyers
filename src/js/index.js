import mobileNav from './modules/mobile-nav.js';
mobileNav();

new Swiper('.clients-swiper', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: true,
    speed: 1200,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
    }
});
