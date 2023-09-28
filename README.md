# Combogic Official Website
預覽官方網站：[http://combogic.com](http://combogic.com)

## 初始化

須擁有 `node.js` 與 `npm`：  
建議使用 `nvm` 做為 `node.js` 版本管理工具，詳請參考 [nvm](https://github.com/nvm-sh/nvm)  

|           | 基本       | 建議       |
| :-------- | :-------- | :-------- |
| `node.js` | `v17.0.0` | `v19.9.0` |
| `nvm`     | `v8.1.0`  | `v9.6.3`  |

```bash
npm install
```

## 開發環境

開發環境預設監聽於 `http://localhost:3000`:

```bash
npm run dev
```

## 產品環境

此專案使用 靜態頁面生成 Static site generation (SSG) 技術

```bash
# 靜態頁面生成
npm run generate

# 預覽
npm run preview
```

## 主要使用技術
- TypeScript： 為 JavaScript 的型別語言，詳情參考 [TypeScript](https://www.typescriptlang.org/)
- Nuxt： 為 Vue 的拓展框架，詳情參考 [Vue](https://vuejs.org/) 與 [Nuxt](https://nuxt.com/)
- tailwindcss： 為 css 框架，詳情參考 [tailwindcss](https://tailwindcss.com/)

## 專案架構
```
combogic
    |
    |__bin // 執行檔
    |__src
    |   |__assets      // 影音資產
    |   |__components  // 元件
    |   |__composables // 組合函數
    |   |__content     // 文章
    |   |__layouts     // 佈局
    |   |__locales     // 語言包
    |   |__pages       // 頁面
    |   |__plugins     // 第三方套件
    |   |__public      // 靜態資源
    |   |__app.vue     // 應用程式入口
    |   |__error.vue   // 錯誤頁面
    |
    |__nuxt.config.js     // Nuxt 設定檔
    |__tailwind.config.js // tailwindcss 設定檔
```