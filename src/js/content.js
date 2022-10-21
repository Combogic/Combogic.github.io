// Plugin
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Module
import './module/header';
import { swiperLimit } from './module/swiperLimit.js';

// Css
import '../css/main.css';
import '../css/content.css';
import '../css/swiper-customize.css';

/** ----------------------------------------------------------------------
 * blog
----------------------------------------------------------------------- */
const blogNum = document.querySelectorAll( '.com-blog' ).length;

const blogSwiper = new Swiper( '#blogSwiper' , {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '#blogNext',
        prevEl: '#blogPrev'
    },
    breakpoints: {
        640: {
            slidesPerView: swiperLimit( blogNum , 1 ),
        },
        768: {
            slidesPerView: swiperLimit( blogNum , 2 ),
        },
        1280: {
            slidesPerView: swiperLimit( blogNum , 3 ),
        }
    }
});