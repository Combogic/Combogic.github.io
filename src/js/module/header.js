export default !function() {
    const header         = document.getElementById( 'header' );
    const headerLanguage = document.getElementById( 'headerLanguage' );
    
    // 漢堡選單
    header.addEventListener( 'click' , event => {
        if( event.target.getAttribute( 'id' ) === 'headerBurger' ) {
            header.classList.toggle( '--open' );
            document.body.classList.toggle( 'overflow-hidden' );
        } else {
            header.classList.remove( '--open' );
            document.body.classList.remove( 'overflow-hidden' );
        }
    });
    
    // 語言選單
    headerLanguage.addEventListener( 'click' , () => {
        headerLanguage.classList.toggle( '--open' )
    });
} ()