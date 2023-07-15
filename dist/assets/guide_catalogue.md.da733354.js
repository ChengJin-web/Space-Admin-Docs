import{_ as s,o as n,c as a,U as l}from"./chunks/framework.6ec0a083.js";const d=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/catalogue.md","filePath":"guide/catalogue.md","lastUpdated":1686046107000}'),p={name:"guide/catalogue.md"},e=l(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="space-admin-目录说明-📚" tabindex="-1">Space-Admin 目录说明 📚 <a class="header-anchor" href="#space-admin-目录说明-📚" aria-label="Permalink to &quot;Space-Admin 目录说明 📚&quot;">​</a></h2><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Space-Admin</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .husky                 # husky 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .vscode                # VSCode 推荐配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ build                  # Vite 配置项</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public                 # 静态资源文件（该文件夹不会被打包）</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ api                 # API 接口管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ assets              # 静态资源文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components          # 全局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ config              # 全局配置项</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ directives          # 全局指令文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ enums               # 项目常用枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ hooks               # 常用 Hooks 封装</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ languages           # 语言国际化 i18n</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ layouts             # 框架布局模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ routers             # 路由管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ stores              # pinia store</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ styles              # 全局样式文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ typings             # 全局 ts 声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ utils               # 常用工具库</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ views               # 项目所有页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue             # 项目主组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main.ts             # 项目入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ vite-env.d.ts       # 指定 ts 识别 vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .editorconfig          # 统一不同编辑器的编码风格</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env                   # vite 常用配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env.development       # 开发环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env.production        # 生产环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env.test              # 测试环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintignore          # 忽略 Eslint 校验</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintrc.cjs          # Eslint 校验配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore             # 忽略 git 提交</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierignore        # 忽略 Prettier 格式化</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierrc.cjs        # Prettier 格式化配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .stylelintignore       # 忽略 stylelint 格式化</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .stylelintrc.cjs       # stylelint 样式格式化配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ CHANGELOG.md           # 项目更新日志</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ commitlint.config.cjs  # git 提交规范配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.html             # 入口 html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ LICENSE                # 开源协议文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ lint-staged.config.cjs # lint-staged 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package-lock.json      # 依赖包包版本锁</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json           # 依赖包管理</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ postcss.config.cjs     # postcss 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README.md              # README 介绍</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ vite.config.ts         # vite 全局配置文件</span></span></code></pre></div>`,3),o=[e];function t(c,i,A,r,C,y){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
