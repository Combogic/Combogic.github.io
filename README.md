Combogic Website
# 新增 Blog
```
1. 新增文章: src/blog/XXX.html
2. 新增文章圖檔: public/img/blog/XXX/a.wepb
3. 文章圖檔連結改為: /img/blog/XXX/a.wepb (build 後出現)
4. npm run build
5. git push
```

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


5. 新增「團隊成員」：
    (1) 在 '/data/member.json' 新增資料
    (2) 在 '/public/img/member' 新增圖片
    (3) 在 terminal 輸入 npm run build


6. 新增「BLOG文章」：
    (1) 圖片準備：轉成webp檔，打包進資料夾(以文章檔名命名)，在 '/public/img/blog' 新增
    (2) 複製 '/src/blog/content.html' ，並更名、編輯 Metadata；英文版網頁則是 '/src/en/blog/content.html'
    (2) 進行轉檔 Md. to HTML https://markdowntohtml.com/。貼上內文，編輯圖像檔 alt 資訊與位置
    (3) 在 terminal 輸入 npm run build


7. Html參數設定：
    於每一個html最頂部，可帶入參數，以下說明：

    index.html & blog/index.html
    {{> header
        lang=        語言設定，台灣為「 "zh-Hant-TW" 」，美國為「 "en" 」
        lang_path=   語言路徑，中文版網頁不需設定，英文版需設定為「 "/en" 」
        title=       網頁上方標題，及社群軟體連結標題
        description= SEO網頁描述文字
        image_og=    社群軟體顯示的照片
    }}

    blog/content.html
    {{#> content-ch
        title=           文章標題、網頁上方標題，及社群軟體連結標題
        description=     文章簡介、SEO網頁描述文字
        date=            文章日期
        image_og=        封面圖片、社群軟體顯示的照片
        image_desc=      封面圖片的描述文字
        image_link=      封面圖片的連結
        image_link_text= 封面圖片連結的文字
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
    |   |   |__main.html       // 模板 head、header、footer
    |   |   |__paint.html      // 模板 首頁動畫
    |   |   |__content-ch.html // 模板 中文文章
    |   |   |__content-en.html // 模板 英文文章
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
    |__member.json // 團隊成員
    |__admin.js    // 後端程式
    |
    |__vite.config.js      // vite 設定檔
    |__tailwind.config.cjs // tailwindcss 設定檔
    |__postcss.config.cjs  // postcss 設定檔
    |
    |__package-lock.json
    |__package.json

9. 文章格式設定：
    (1) 文章格式設定在 content.css 裡面
    (2) 圖片大小設定可以在 <img> tag 裡面加入 class="small" 、class="tiny" 微調圖片大小，共有 "full"（全幅）、"mediu"、"small"、"tiny" 可以選擇。
        例：
        <figure>
            <img class="small" src="/img/blog/esg-history/7-pri.webp" alt="責任投資原則">
            <figcaption>責任投資原則（<a href="https://en.wikipedia.org/wiki/Principles_for_Responsible_Investment">圖片來源</a>）</figcaption>
        </figure>

    (3) 