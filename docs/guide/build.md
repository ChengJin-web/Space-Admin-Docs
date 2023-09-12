# 构建、部署

::: tip

由于是展示项目，所以打包后可能较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。

:::

## 构建

项目开发完成后，执行以下命令进行构建

```bash
pnpm build
```

## 预览

发布之前可以在本地进行预览 (不能直接打开构建后的 html 文件)

使用项目自定的命令进行预览

```bash

# 先打包在进行预览
pnpm preview

```

## 部署

例如上传到 nginx 此目录 `/srv/www/project/index.html`

```bash
# nginx 配置
location / {
	# 不缓存 html，防止程序更新后缓存继续生效
	if ($request_filename ~* .*\.(?:htm|html)$) {
		add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
		access_log on;
	}
	# 这里是 vue 打包文件 dist 内的文件的存放路径
	root /srv/www/project/;
	index index.html index.htm;
}
```

部署时可能会发现资源路径不对，只需要修改`.env.production` 文件即可。

```bash
# 根据自己路径来配置更改
# 注意需要以 / 开头和结尾
VITE_PUBLIC_PATH = /
VITE_PUBLIC_PATH = /xxx

```

### 前端路由与服务端的结合

项目前端路由使用的是 vue-router，所以你可以选择两种方式：`history` 和 `hash`。

- hash 默认会在 url 后面拼接`#`
- history 则不会，不过 history 需要服务器配合

路由模式可在 src/routers/index.ts 内进行 mode 修改

```js
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	// or
	history: createWebHistory(),
});
```

### history 路由模式下服务端配置

开启 history 模式

```js
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		//...
	],
});
```

nginx 配置

```bash

server {
  listen 80;
  location / {
    # 用于配合 History 使用
    try_files $uri $uri/ /index.html;
  }
}

```

### 部署到非根目录

首先需要在打包的时候更改配置

```bash
# 在.env.production内，配置子目录路径
VITE_PUBLIC_PATH = /sub
```

```bash
server {
    listen       80;
    server_name  localhost;
    location /sub/ {
      # 这里是vue打包文件dist内的文件的存放路径
      alias   /srv/www/project/;
      index index.html index.htm;
      try_files $uri $uri/ /sub/index.html;
    }
}
```

### 使用 nginx 处理跨域

使用 nginx 处理项目部署后的跨域问题

配置前端项目接口地址

```bash
# 在.env.production内，配置接口地址
VITE_GLOB_API_URL = /api
```

在 nginx 配置请求转发到后台

```bash
server {
  listen       8080;
  server_name  localhost;
  # 接口代理，用于解决跨域问题
  location /api {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    # 后台接口地址
    proxy_pass http://110.110.1.1:8080/api;
    proxy_redirect default;
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Headers X-Requested-With;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
  }
}
```
