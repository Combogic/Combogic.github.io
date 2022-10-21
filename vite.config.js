// vite
import { defineConfig } from 'vite';
import { resolve } from 'path';

// vite plugin
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import handlebars from 'vite-plugin-handlebars';

// data
import blogData   from './data/blog.json';
import memberData from './data/member.json';

// 打包固定頁面
let rollupInput = {
    'index':    './src/index.html',
    'blog':     './src/blog/index.html',
    'index-en': './src/en/index.html',
    'blog-en':  './src/en/blog/index.html'
};

// 打包BLOG頁面（需先自行新增html）
blogData.forEach( page => {
    let name = page.href.replace( '/blog/' , '' ).replace( '.html' , '' );
    rollupInput[ name ]         = './src'    + page.href;
    rollupInput[ name + '-en' ] = './src/en' + page.href;
});

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    root: './src',

    // 打包
    build: {
        // 清空打包路徑
        emptyOutDir: true,
        // 打包路徑
        rollupOptions: {
            input: rollupInput
        },
        // 輸出路徑
        outDir: '../docs',
    },

    // 靜態資源路徑
    publicDir: '../public',

    // 套件
    plugins: [
        // 壓縮
        ViteMinifyPlugin({}),
        // 模板引擎
        handlebars({
            // 帶入資料
            context: {
                blogData:   blogData,
                memberData: memberData
            },
            // 帶入模板
            partialDirectory: resolve( __dirname , './src/template' ),
        }),
    ],
})