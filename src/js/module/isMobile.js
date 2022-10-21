// 裝置判斷
export function isMobile() {
    const deviceList = [ 'Android' , 'webOS' , 'iPhone' , 'iPad' , 'iPod' , 'BlackBerry' , 'Windows Phone' ];
    let judge = false;
    deviceList.forEach( device => {
        navigator.userAgent.match( device ) ? judge = true : null;
    });
    return judge;
};