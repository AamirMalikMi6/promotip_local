import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

new Splide( '.splide', {
    type: 'loop',
    perPage: 5,
    padding: 0,
    gap: 15,
    breakpoints: {
        576: {
            perPage: 3,
            gap: 0,
            padding: 0,
        },
        768: {
            perPage: 2,
        },
        992: {
            perPage: 3,
        },
    },
    focus: 'center',
    updateOnMove: true,
    pagination: true,
    autoplay: true,
} ).mount();


