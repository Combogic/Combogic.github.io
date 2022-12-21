import fs from 'fs';

/** ----------------------------------------------------------------------
 * 打包清單
----------------------------------------------------------------------- */
const rollupInput = []

const dirs = [
    './src/',
    './src/blog/',
    './src/en/',
    './src/en/blog/',
];

dirs.forEach( dir => {
    let files = fs.readdirSync( dir );
    files.forEach( file => {
        if( file.match( '.html' ) && !file.match( 'content.html' ) ) {
            rollupInput.push( dir + file )
        }
    })
});

/** ----------------------------------------------------------------------
 * 更多文章清單
----------------------------------------------------------------------- */
const blogDataCh = [];
const blogDataEn = [];

rollupInput.forEach( href => {
    if( href.match( '/blog/' ) && !href.match( 'index.html' ) ) {

        let html = fs.readFileSync( href , { encoding: 'utf-8' } );
        let params = html.match( /\{\{\#\>[\u0020]*(content)[^\{]+\}\}/ )[ 0 ];

        const getParams = param => {
            return(
                params.match( RegExp( `(${ param })\=\"[^\"]+\"` ) )[ 0 ]
                    .replace( param + '="' , '' )
                    .replace( '"' , '' )
            )
        };

        let blogData = {
            title:       getParams( 'title' ),
            date:        getParams( 'date' ),
            description: getParams( 'description' ),
            image_og:    getParams( 'image_og' ),
            href:        href.replace( './src' , '' )
        };

        switch( true ) {
            case href.search( '/en' ) !== -1:
                blogDataEn.push( blogData );
                break;
            default:
                blogDataCh.push( blogData );
                break;
        };
    }
});

[ blogDataCh , blogDataEn ].forEach( list =>
    list.sort( ( a , b ) => {
        return new Date( a.date ) < new Date( b.date ) ? 1 : -1;
    })
);

/** ----------------------------------------------------------------------
 * 更多文章卡片
----------------------------------------------------------------------- */
const blogCard = ( list , thisPage , limit ) => {
    let count = 0;
    let html  = '';
    // ! function參數 不支援 默認值
    limit ? limit = 6 : limit = list.length;
    // ! 不支援 while loop
    for( let i = 0 ; i < list.length ; i++ ) {
        let blog = list[ i ];
        if( blog.title !== thisPage && count < limit ) {
            html +=
            `<div class="swiper-slide">
                <div class="com-blog com-block">
                    <div>
                        <div>
                            <img src="${ blog.image_og }"
                                alt="${ blog.title }"
                                width="443"
                                height="249">
                        </div>
                        <div>
                            <h3>
                                <a href="${ blog.href }">${ blog.title }</a>
                            </h3>
                            <p>
                                ${ blog.description }
                            </p>
                        </div>
                    </div>
                    <a class="com-btn-square"
                        href="${ blog.href }">
                        ${ blog.href.match( '/en' ) ? 'Read Article' : '閱讀文章' }
                    </a>
                </div>
            </div>`;
            count++;
        }
    }
    return html;
}

export { rollupInput , blogDataCh , blogDataEn , blogCard };