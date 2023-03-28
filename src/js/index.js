// Plugin
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import emailjs from '@emailjs/browser';

// Module
import './module/header';
import { isMobile } from './module/is-mobile.js';
import { swiperLimit } from './module/swiper-limit.js';

// Css
import '../css/main.css';
import '../css/index.css';
import '../css/swiper-customize.css';

/** ----------------------------------------------------------------------
 * paint
----------------------------------------------------------------------- */
const paintLen = document.querySelectorAll( '.com-paint-animate' ).length;
const paintEl = ( attr = '' ) => document.querySelector( `.com-paint-animate${ attr }` );

const paintChange = () => {
    // 取得id
    let id = paintEl( '.--show' ).getAttribute( 'paint-id' );
    id = Number( id );
    id + 1 >= paintLen ? id = 0 : id++;
    // 切換動畫
    paintEl( '.--show' ).classList.remove( '--show' );
    paintEl( `[paint-id="${ id }"]` ).classList.add( '--show' );
};

setInterval( () => paintChange() , 3000 );

/** ----------------------------------------------------------------------
 * whychap
----------------------------------------------------------------------- */
let whyChapBtn = [];

document.querySelectorAll( '.com-whychap-content > h3' ).forEach( element =>
    whyChapBtn.push( element.innerHTML )
);

// swiper
const whyChapSwiper = new Swiper( '#whyChapSwiper' , {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 7000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        renderBullet: ( index , className ) => {
            return (
                `<span class="${ className } com-whychap-btn">
                    ${ whyChapBtn[ index ] }
                </span>`
            )
        },
    }
});

/** ----------------------------------------------------------------------
 * team
----------------------------------------------------------------------- */
const memberCard = document.querySelectorAll( '.com-member' );
const memberNum  = memberCard.length;

// memberCard
const memberEnter = event => {
    event.target.classList.add( '--show' );
};

const memberLeave = event => {
    event.target.classList.remove( '--show' );
};

const memberClick = event => {
    event.target.classList.toggle( '--show' );
};

memberCard.forEach( element => {
    if( isMobile() ) {
        element.addEventListener( 'click' , memberClick );
    } else {
        element.addEventListener( 'mouseenter' , memberEnter );
    }
    element.addEventListener( 'mouseleave' , memberLeave );
});

// swiper
const memberSwiper = new Swiper( '#memberSwiper' , {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '#memberNext',
        prevEl: '#memberPrev'
    },
    breakpoints: {
        640: {
            slidesPerView: swiperLimit( memberNum , 2 ),
        },
        768: {
            slidesPerView: swiperLimit( memberNum , 3 ),
        },
        1280: {
            slidesPerView: swiperLimit( memberNum , 5 ),
        }
    }
});

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

/** ----------------------------------------------------------------------
 * contact
----------------------------------------------------------------------- */
const contactSubmit     = document.getElementById( 'contactSubmit' );
const contactSubmitText = document.getElementById( 'contactSubmitText' );
const contactForm = [
    {
        element: document.getElementById( 'contactName' ),
        ruleList: [
            {
                rule: value => value !== '',
                alert: {
                    ch: '此為必填欄位！',
                    en: 'This is a required field!'
                }
            }
        ]
    },
    {
        element: document.getElementById( 'contactCom' ),
        ruleList: [
            {
                rule: value => value !== '',
                alert: {
                    ch: '此為必填欄位！',
                    en: 'This is a required field!'
                }
            }
        ]
    },
    // {
    //     element: document.getElementById( 'contactTel' ),
    //     ruleList: [
    //         {
    //             rule: value => value.search( /[0-9]/ ) !== -1 || value === '',
    //             alert: {
    //                 ch: '電話格式錯誤！',
    //                 en: 'Phone number invalid!'
    //             }
    //         }
    //     ]
    // },
    {
        element: document.getElementById( 'contactEmail' ),
        ruleList: [
            {
                rule: value => value !== '',
                alert: {
                    ch: '此為必填欄位！',
                    en: 'This is a required field!'
                }
            },
            {
                rule:  value => value.search( /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ) !== -1,
                alert: {
                    ch: '信箱格式錯誤！',
                    en: 'E-mail invalid!'
                }
            }
        ]
    },
    // {
    //     element: document.getElementById( 'contactDetail' ),
    //     ruleList: [
    //         {
    //             rule: value => value !== '',
    //             alert: {
    //                 ch: '此為必填欄位！',
    //                 en: 'This is a required field!'
    //             }
    //         },
    //         {
    //             rule: value => value.length <= 1000,
    //             alert: {
    //                 ch: '已超出1000字！',
    //                 en: 'Exceeded 1000 letters!'
    //             }
    //         }
    //     ]
    // }
];

// 點選送出
contactSubmit.addEventListener( 'click' , () => {
    // 符合規則，打包信件
    contactJudge( contactForm ) ? contactBundle() : null;
});

// 判斷表單
const contactJudge = list => {
    let judge = true;
    list.forEach( li => {
        // 清空警告
        li.element.previousElementSibling.innerHTML = '';
        // 有規則
        if( li.ruleList ) {
            for( let i = 0 ; i < li.ruleList.length ; i++ ) {
                let ru = li.ruleList[ i ];
                let el = li.element;
                // 不符規則
                if( !ru.rule( el.value ) ) {
                    contactError( el , ru.alert );
                    judge = false;
                    break;
                }
            }
        }
    });
    return judge;
};

// 表單警告
const contactError = ( element , alert ) => {
    // 判斷網頁語言
    let path = window.location.pathname;
    switch ( true ) {
        case path.search( 'en' ) !== -1:
            alert = alert.en;
            break;
        default:
            alert = alert.ch;
            break;
    }
    element.previousElementSibling.innerHTML =
        '<svg viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>'
        + alert;
};

// 打包信件
const contactBundle = () => {
    let detail = {};
    contactForm.forEach( li => {
        detail[ li.element.getAttribute( 'name' ) ] = li.element.value;
    });
    contactSend( detail );
};

// 發送信件
const contactSend = detail => {
    const text = contactSubmitText.innerHTML;
    // loading
    contactSubmit.classList.add( '--load' );
    // emailjs
    emailjs.send( 'service_6itzjbh' , 'template_wuh5nji' , detail , '1lG0MNj65ijuE4D4f' )
        .then( () => {
            contactForm.forEach( li => li.element.value = '' );
            contactSubmitText.innerHTML = 'SUCCESS';
        })
        .catch( error => {
            console.error( error );
            contactSubmitText.innerHTML = 'ERROR';
        })
        .finally( () => {
            contactSubmit.classList.remove( '--load' );
            setTimeout( () => contactSubmitText.innerHTML = text , 2000 );
        });
};