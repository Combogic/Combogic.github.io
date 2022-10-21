Combogic Website


1. 使用技術：
    (1) 後端語言： node.js & npm
    (2) 建構工具： Vite
    (3) 模板工具： Vite-Plugin-Handlebars（即 Handlebars.js ）
    (4) Css框架： TailwindCss
    (5) 使用套件： swiperjs 、 emailjs


2. 確認電腦有 node.js 以及 npm


3. 打包工具 Vite：
    (1) 開發環境預覽：npm run dev
    (2) 程式打包　　：npm run build
    (3) 上線環境預覽：npm run preview


4. 本站使用 Tailwind Css：
    (1) 自訂的 Css 建議加前綴「com-」
    (2) Tailwind Css、切版、hover、自訂Css...建議個別換行
    例：
    <div class="com-card
        flex flex-col p-4 bg-slate-50 transition
        hover:bg-sky-400
        sm:p-8
        md:flex-row">
    </div>


5. 新增「團隊成員」（暫時做法，未來依後端調整）：
    (1) 在 '/data/member.json' 新增資料
    (2) 在 '/public/img/member' 新增照片
    (3) 在 terminal 輸入 npm run build


6. 新增「BLOG文章」（暫時做法，未來依後端調整）：
    (1) 在 '/data/blog.json' 新增資料
        （目前新增的資料，僅會出現在swiper中，仍須自行新增html）
    (2) 在 '/public/img/blog' 新增照片
    (3) 複製 '/src/blog/content.html' ，並更名、編輯內文
        英文版網頁則是 '/src/en/blog/content.html'
    (4) 在 terminal 輸入 npm run build


7. Html參數設定：
    於每一個html最頂部，可帶入參數，以下說明：
    {{> header
        lang=        語言設定，台灣為「 "zh-Hant-TW" 」，美國為「 "en" 」
        lang_path=   語言路徑，中文版網頁不需設定，英文版需設定為「 "/en" 」
        title=       網頁上方標題，及社群軟體連結標題
        description= SEO網頁描述文字
        keywords=    SEO網頁關鍵字（Google已不採用）
        image_og=    社群軟體顯示的照片（圖片需用「絕對位置」）
    }}


8. 專案架構
combogic
    |
    |__src
    |	|__index.html // 首頁
    |   |__blog
    |   |   |__index.html   // 更多文章
    |   |   |__content.html // 單篇文章（之後新增複製）
    |   |
    |   |__en
    |   |   |__index.html // 首頁
    |   |       |__blog
    |   |           |__index.html   // 更多文章
    |   |           |__content.html // 單篇文章（之後新增複製）
    |   |
    |   |__template
    |   |   |__header.html // 模板 header
    |   |   |__footer.html // 模板 footer
    |   |
    |   |__js
    |   |   |__index.js   // 首頁
    |   |   |__blog.js    // 更多文章
    |   |   |__content.js // 單篇文章（共用）
    |   |       |__module
    |   |           |__header.js       // 模組 header
    |   |           |__is-mobile.js    // 模組 裝置判斷
    |   |           |__swiper-limit.js // 模組 swiper 數量限制
    |   |
    |   |__css
    |   |   |__main.css             // 共用css
    |   |   |__index.css            // 首頁
    |   |   |__blog.css             // 更多文章
    |   |   |__content.css          // 單篇文章（共用）
    |   |   |__swiper-customize.css // swiper套件自訂樣式
    |   |
    |   |__assets // 圖片及影片
    |
    |
    |__data
    |   |__blog.json   // 最新消息
    |   |__member.json // 團隊成員
    |
    |
    |__public
    |   |__img
    |       |__blog   // 最新消息圖片
    |       |__member // 團隊成員圖片
    |
    |
    |__node_modules // 第三方套件
    |
    |
    |__dist // 打包程式碼
    |
    |
    |__vite.config.js      // vite 設定檔
    |__tailwind.config.cjs // tailwindcss 設定檔
    |__postcss.config.cjs  // postcss 設定檔
    |__package-lock.json
    |__package.json