import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation,Pagination]);


const swiper = new Swiper('.testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
