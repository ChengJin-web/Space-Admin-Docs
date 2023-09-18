# 介绍

## 简介

[Spacebar](https://github.com/ChengJin-web/Spacebar) 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。本项目封装了一些常用组件、hooks、指令、动态路由、按钮级别权限控制等功能。

## 需要掌握的基础知识

- 本项目基于 Vue3.3、Vite4、TS、Pinia、Element-Plus 开发，并全部采用了的单文件组件 `<script setup>` 写法。

- 建议您在开发前先学习以下内容，提前了解和学习这些知识，会对项目理解非常有帮助：
  - [Vue3 文档](https://cn.vuejs.org/guide/introduction.html)
  - [Vue-Router 文档](https://router.vuejs.org/zh/guide/)
  - [Vite 文档](https://cn.vitejs.dev/guide/)
  - [TypeScript 文档](https://www.typescriptlang.org/zh/docs/)
  - [Pinia 文档](https://pinia.web3doc.top/introduction.html)
  - [Element-Plus 文档](https://element-plus.org/zh-CN/component/button.html)
  - [ES6 教程](https://es6.ruanyifeng.com/)

## 关于版本更新

- 本项目后期将会经历不断的更新迭代，后期尽量不进行破坏性更新。对于大多数前端开源管理系统，它们无法像 npm 包那样平滑的升级版本，因此我们为此给出一些升级的建议。
- 在编写代码时，应尽量避免修改核心部分。如果业务需要对框架核心内容进行修改，请记录下修改内容，以免在之后的升级过程中被覆盖掉。

## 浏览器支持

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。

- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
  | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  |                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

<script setup>
const contributor = [
 {src:'https://avatars.githubusercontent.com/u/110580672?v=4',link:'https://github.com/ChengJin-web',title:'JinCheng'}
]
</script>

## 主要维护者

<Avatar v-for="user in contributor" :title="user.title" :src="user.src" :link="user.link"/>
