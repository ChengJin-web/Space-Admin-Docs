import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const v=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/catalogue.md","filePath":"guide/catalogue.md","lastUpdated":1694500866000}'),l={name:"guide/catalogue.md"},p=e(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="spacebar-目录说明-📚" tabindex="-1">Spacebar 目录说明 📚 <a class="header-anchor" href="#spacebar-目录说明-📚" aria-label="Permalink to &quot;Spacebar 目录说明 📚&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Spacebar</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .husky                 # husky 配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vscode                # VSCode 推荐配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ config                 # Vite 配置项</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ public                 # 静态资源文件（该文件夹不会被打包）</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ src</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ api                 # API 接口管理</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ assets              # 静态资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ components          # 全局组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ config              # 全局配置项</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ directives          # 全局指令文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ enums               # 项目常用枚举</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ hooks               # 常用 Hooks 封装</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ languages           # 语言国际化 i18n</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ layouts             # 框架布局模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ routers             # 路由管理</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ stores              # pinia store</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ styles              # 全局样式文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ typings             # 全局 ts 声明</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ utils               # 常用工具库</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ views               # 项目所有页面</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ App.vue             # 项目主组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ main.ts             # 项目入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ vite-env.d.ts       # 指定 ts 识别 vue</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .editorconfig          # 统一不同编辑器的编码风格</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .env                   # vite 常用配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .env.development       # 开发环境配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .env.production        # 生产环境配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .env.test              # 测试环境配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .eslintignore          # 忽略 Eslint 校验</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .eslintrc.cjs          # Eslint 校验配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .gitignore             # 忽略 git 提交</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .prettierignore        # 忽略 Prettier 格式化</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .prettierrc.cjs        # Prettier 格式化配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .stylelintignore       # 忽略 stylelint 格式化</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .stylelintrc.cjs       # stylelint 样式格式化配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ CHANGELOG.md           # 项目更新日志</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ commitlint.config.cjs  # git 提交规范配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.html             # 入口 html</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ LICENSE                # 开源协议文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ lint-staged.config.cjs # lint-staged 配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ package-lock.json      # 依赖包包版本锁</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ package.json           # 依赖包管理</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ postcss.config.cjs     # postcss 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ README.md              # README 介绍</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ vite.config.ts         # vite 全局配置文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Spacebar</span></span>
<span class="line"><span style="color:#24292e;">├─ .husky                 # husky 配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ .vscode                # VSCode 推荐配置</span></span>
<span class="line"><span style="color:#24292e;">├─ config                 # Vite 配置项</span></span>
<span class="line"><span style="color:#24292e;">├─ public                 # 静态资源文件（该文件夹不会被打包）</span></span>
<span class="line"><span style="color:#24292e;">├─ src</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ api                 # API 接口管理</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ assets              # 静态资源文件</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ components          # 全局组件</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ config              # 全局配置项</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ directives          # 全局指令文件</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ enums               # 项目常用枚举</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ hooks               # 常用 Hooks 封装</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ languages           # 语言国际化 i18n</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ layouts             # 框架布局模块</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ routers             # 路由管理</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ stores              # pinia store</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ styles              # 全局样式文件</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ typings             # 全局 ts 声明</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ utils               # 常用工具库</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ views               # 项目所有页面</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ App.vue             # 项目主组件</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ main.ts             # 项目入口文件</span></span>
<span class="line"><span style="color:#24292e;">│  └─ vite-env.d.ts       # 指定 ts 识别 vue</span></span>
<span class="line"><span style="color:#24292e;">├─ .editorconfig          # 统一不同编辑器的编码风格</span></span>
<span class="line"><span style="color:#24292e;">├─ .env                   # vite 常用配置</span></span>
<span class="line"><span style="color:#24292e;">├─ .env.development       # 开发环境配置</span></span>
<span class="line"><span style="color:#24292e;">├─ .env.production        # 生产环境配置</span></span>
<span class="line"><span style="color:#24292e;">├─ .env.test              # 测试环境配置</span></span>
<span class="line"><span style="color:#24292e;">├─ .eslintignore          # 忽略 Eslint 校验</span></span>
<span class="line"><span style="color:#24292e;">├─ .eslintrc.cjs          # Eslint 校验配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ .gitignore             # 忽略 git 提交</span></span>
<span class="line"><span style="color:#24292e;">├─ .prettierignore        # 忽略 Prettier 格式化</span></span>
<span class="line"><span style="color:#24292e;">├─ .prettierrc.cjs        # Prettier 格式化配置</span></span>
<span class="line"><span style="color:#24292e;">├─ .stylelintignore       # 忽略 stylelint 格式化</span></span>
<span class="line"><span style="color:#24292e;">├─ .stylelintrc.cjs       # stylelint 样式格式化配置</span></span>
<span class="line"><span style="color:#24292e;">├─ CHANGELOG.md           # 项目更新日志</span></span>
<span class="line"><span style="color:#24292e;">├─ commitlint.config.cjs  # git 提交规范配置</span></span>
<span class="line"><span style="color:#24292e;">├─ index.html             # 入口 html</span></span>
<span class="line"><span style="color:#24292e;">├─ LICENSE                # 开源协议文件</span></span>
<span class="line"><span style="color:#24292e;">├─ lint-staged.config.cjs # lint-staged 配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ package-lock.json      # 依赖包包版本锁</span></span>
<span class="line"><span style="color:#24292e;">├─ package.json           # 依赖包管理</span></span>
<span class="line"><span style="color:#24292e;">├─ postcss.config.cjs     # postcss 配置</span></span>
<span class="line"><span style="color:#24292e;">├─ README.md              # README 介绍</span></span>
<span class="line"><span style="color:#24292e;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#24292e;">└─ vite.config.ts         # vite 全局配置文件</span></span></code></pre></div>`,3),o=[p];function c(t,i,r,y,d,g){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{v as __pageData,h as default};
