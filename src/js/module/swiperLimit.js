// swiper 數量限制
export function swiperLimit( num , limit ) {
    if( num >= limit ) {
        return limit
    } else {
        return num
    }
};