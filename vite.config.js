import { defineConfig } from 'vite';
import { resolve } from 'path';

// vite plugin
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import Handlebars from 'vite-plugin-handlebars';

// data
import memberData from './member.json';
import { rollupInput , blogDataCh , blogDataEn , blogCard } from './admin.js'

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
        Handlebars({
            // 帶入資料
            context: {
                blogDataCh: blogDataCh,
                blogDataEn: blogDataEn,
                memberData: memberData
            },
            // 帶入模板
            partialDirectory: resolve( __dirname , './src/template' ),
            helpers: {
                blogCard
            }
        }),
    ],
})