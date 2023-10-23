import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"路由、菜单","description":"","frontmatter":{},"headers":[],"relativePath":"guide/router.md","filePath":"guide/router.md","lastUpdated":1698043386000}'),p={name:"guide/router.md"},o=l(`<h1 id="路由、菜单" tabindex="-1">路由、菜单 <a class="header-anchor" href="#路由、菜单" aria-label="Permalink to &quot;路由、菜单&quot;">​</a></h1><p>路由配置在 <a href="https://github.com/chengkoi/spacebar/tree/master/src/routers" target="_blank" rel="noreferrer">src/routers</a> 文件下面：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>项目默认采用动态添加路由方式控制</li><li>需要其它路由功能根据自己项目需求改造</li></ul></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ routers                    # 路由相关文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├ ├─ modules                  # 路由模块</span></span>
<span class="line"><span style="color:#e1e4e8;">├ ├ ├─ dynamicRouter.ts       # 动态路由添加逻辑</span></span>
<span class="line"><span style="color:#e1e4e8;">├ │ └─ staticRouter.ts        # 静态路由配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├ └─index.ts                  # 封装后的axios</span></span>
<span class="line"><span style="color:#e1e4e8;">└─</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ routers                    # 路由相关文件</span></span>
<span class="line"><span style="color:#24292e;">├ ├─ modules                  # 路由模块</span></span>
<span class="line"><span style="color:#24292e;">├ ├ ├─ dynamicRouter.ts       # 动态路由添加逻辑</span></span>
<span class="line"><span style="color:#24292e;">├ │ └─ staticRouter.ts        # 静态路由配置</span></span>
<span class="line"><span style="color:#24292e;">├ └─index.ts                  # 封装后的axios</span></span>
<span class="line"><span style="color:#24292e;">└─</span></span></code></pre></div><h2 id="路由参数" tabindex="-1">路由参数 <a class="header-anchor" href="#路由参数" aria-label="Permalink to &quot;路由参数&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/** 路由参数简介 */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 路由访问路径 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 &amp;&amp; 按钮权限筛选) */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 路由重定向地址 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">redirect</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 视图文件路径 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">component</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> (() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 路由元信息 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">meta</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 菜单和面包屑对应的图标 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">icon</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 路由标题 (用作 document.title || 菜单的名称) */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 是否在菜单中隐藏, 需要高亮的 path (通常用作详情页高亮父级菜单) */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">activeMenu</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 路由外链时填写的访问地址 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isLink</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 是否在菜单中隐藏 (通常列表详情页需要隐藏) */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isHide</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 菜单是否全屏 (示例：数据大屏页面) */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isFull</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 菜单是否固定在标签页中 (首页通常是固定项) */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isAffix</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 当前路由是否缓存 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isKeepAlive</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** 多级路由嵌套 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">children</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;">[];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** 路由参数简介 */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 路由访问路径 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">path</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 &amp;&amp; 按钮权限筛选) */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 路由重定向地址 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">redirect</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 视图文件路径 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">component</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> (() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 路由元信息 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">meta</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 菜单和面包屑对应的图标 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">icon</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 路由标题 (用作 document.title || 菜单的名称) */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 是否在菜单中隐藏, 需要高亮的 path (通常用作详情页高亮父级菜单) */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">activeMenu</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 路由外链时填写的访问地址 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isLink</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 是否在菜单中隐藏 (通常列表详情页需要隐藏) */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isHide</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 菜单是否全屏 (示例：数据大屏页面) */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isFull</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 菜单是否固定在标签页中 (首页通常是固定项) */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isAffix</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 当前路由是否缓存 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isKeepAlive</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** 多级路由嵌套 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">children</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">[];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="路由实现" tabindex="-1">路由实现 <a class="header-anchor" href="#路由实现" aria-label="Permalink to &quot;路由实现&quot;">​</a></h2><ul><li>默认根据后端接口返回的数据生成动态路由</li><li>如果想把路由变成本地，直接更改 <a href="https://github.com/chengkoi/spacebar/blob/master/src/api/modules/login.ts" target="_blank" rel="noreferrer">src/api/modules/login.ts =&gt; getAuthMenuListApi</a> 方法</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> authMenuList </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/assets/json/authMenuList.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取菜单列表</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAuthMenuListApi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// return http.get&lt;Menu.MenuOptions[]&gt;(PORT1 + \`/menu/list\`, {}, { noLoading: true });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> authMenuList;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> authMenuList </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/assets/json/authMenuList.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取菜单列表</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAuthMenuListApi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// return http.get&lt;Menu.MenuOptions[]&gt;(PORT1 + \`/menu/list\`, {}, { noLoading: true });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> authMenuList;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="新增路由" tabindex="-1">新增路由 <a class="header-anchor" href="#新增路由" aria-label="Permalink to &quot;新增路由&quot;">​</a></h2><h3 id="一级路由" tabindex="-1">一级路由 <a class="header-anchor" href="#一级路由" aria-label="Permalink to &quot;一级路由&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">home</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&quot;/home/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  component: </span><span style="color:#9ECBFF;">&quot;/home/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&quot;HomeFilled&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;首页&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isAffix: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">home</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&quot;/home/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  component: </span><span style="color:#032F62;">&quot;/home/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&quot;HomeFilled&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;首页&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isAffix: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="二级路由" tabindex="-1">二级路由 <a class="header-anchor" href="#二级路由" aria-label="Permalink to &quot;二级路由&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proTable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&quot;/proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&quot;MessageBox&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;超级表格&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;Menu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;使用 ProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proTable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&quot;/proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&quot;MessageBox&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;超级表格&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: </span><span style="color:#032F62;">&quot;/proTable/useProTable/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;Menu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;使用 ProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="动态路由-父级子级详情页" tabindex="-1">动态路由（父级子级详情页） <a class="header-anchor" href="#动态路由-父级子级详情页" aria-label="Permalink to &quot;动态路由（父级子级详情页）&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proTable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&quot;/proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&quot;MessageBox&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;超级表格&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;Menu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;使用 ProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable/detail/:id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;useProTableDetail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          component: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable/detail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&quot;Menu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;ProTable 详情&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            activeMenu: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isHide: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proTable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&quot;/proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&quot;MessageBox&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;超级表格&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: </span><span style="color:#032F62;">&quot;/proTable/useProTable/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;Menu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;使用 ProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&quot;/proTable/useProTable/detail/:id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;useProTableDetail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          component: </span><span style="color:#032F62;">&quot;/proTable/useProTable/detail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          meta: {</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&quot;Menu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&quot;ProTable 详情&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            activeMenu: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isHide: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="动态路由-父级同级详情页" tabindex="-1">动态路由（父级同级详情页） <a class="header-anchor" href="#动态路由-父级同级详情页" aria-label="Permalink to &quot;动态路由（父级同级详情页）&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proTable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&quot;/proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;proTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&quot;/proTable/useProTable&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&quot;MessageBox&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;超级表格&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/proTable/useTreeFilter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;useTreeFilter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: </span><span style="color:#9ECBFF;">&quot;/proTable/useTreeFilter/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;Menu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;使用 TreeFilter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isHide: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/proTable/useTreeFilter/detail/:id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;useTreeFilterDetail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: </span><span style="color:#9ECBFF;">&quot;/proTable/useTreeFilter/detail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;Menu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;TreeFilter 详情&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        activeMenu: </span><span style="color:#9ECBFF;">&quot;/proTable/useTreeFilter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isLink: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isHide: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isFull: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isAffix: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isKeepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proTable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&quot;/proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;proTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&quot;/proTable/useProTable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&quot;MessageBox&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;超级表格&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/proTable/useTreeFilter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;useTreeFilter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: </span><span style="color:#032F62;">&quot;/proTable/useTreeFilter/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;Menu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;使用 TreeFilter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isHide: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/proTable/useTreeFilter/detail/:id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;useTreeFilterDetail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: </span><span style="color:#032F62;">&quot;/proTable/useTreeFilter/detail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;Menu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;TreeFilter 详情&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        activeMenu: </span><span style="color:#032F62;">&quot;/proTable/useTreeFilter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isLink: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isHide: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isFull: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isAffix: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        isKeepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h2><ul><li>根据路由数据转换而来</li><li>所以只要更改路由信息菜单会随之改变，整个项目只需维护一套数据即可</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>菜单展示时需要过滤掉 isHide 属性为 true 的路由</li></ul></div><ul><li>utils：</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> 使用递归过滤出需要渲染在左侧菜单的列表 (需剔除 isHide == true 的菜单)</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Array}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">menuList</span><span style="color:#6A737D;"> 菜单列表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Array}</span></span>
<span class="line"><span style="color:#6A737D;"> * */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getShowMenuList</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">menuList</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Menu</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MenuOptions</span><span style="color:#E1E4E8;">[]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newMenuList</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Menu</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MenuOptions</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(menuList));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> newMenuList.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    item.children?.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (item.children </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getShowMenuList</span><span style="color:#E1E4E8;">(item.children));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">item.meta?.isHide;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> 使用递归过滤出需要渲染在左侧菜单的列表 (需剔除 isHide == true 的菜单)</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Array}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">menuList</span><span style="color:#6A737D;"> 菜单列表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Array}</span></span>
<span class="line"><span style="color:#6A737D;"> * */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getShowMenuList</span><span style="color:#24292E;">(</span><span style="color:#E36209;">menuList</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Menu</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MenuOptions</span><span style="color:#24292E;">[]) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newMenuList</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Menu</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MenuOptions</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(menuList));</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> newMenuList.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    item.children?.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (item.children </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getShowMenuList</span><span style="color:#24292E;">(item.children));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">item.meta?.isHide;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,24),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{q as __pageData,d as default};
