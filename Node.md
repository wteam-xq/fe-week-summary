# Node 高质博文
* 主要包含 Node, Deno 等文章

* [聊聊Deno的那些事](https://mp.weixin.qq.com/s/6tXZYQ8SBvIrhhsZEKVZqQ)
* [如何考察Node工程能力](https://juejin.cn/post/6959477438757896205)
* [Node 框架 - Nest](https://docs.nestjs.cn/8/introduction)
* [如何实现Node RPC（1）](https://developer.aliyun.com/article/712448)
* [一文了解AsyncHooks](https://mp.weixin.qq.com/s/08AVmJLMdMNm4yNWQwk-DA) - NodeJS 追踪异步资源 API
* [谈一谈 Node.js Stream 中 Readable 类的源码实现](https://mp.weixin.qq.com/s/sD6Pi3hS9H5XysmG5cRDhw) 最新Node 源码分析文， 推荐
* [Node 调试指南](https://www.bookstack.cn/read/node-in-debugging/README.md)
* [如何优化node项目的docker镜像](https://juejin.cn/post/6991689670027542564)
* [聊聊字节跳动 Node.js RPC 的设计实现](https://mp.weixin.qq.com/s/Ky6SoWJv85orqYioihTRqg) Node.js RPC重构总结
```
只要公司达到一定量级，其后端服务之间必定会采用 RPC 而非简单 HTTP 的形式来进行互相调用。因此，对于想做全栈或者后端 Node.js 的同学来说，早点了解与使用 RPC 是非常有必要的。
```
* [npm 实用命令及版本号](https://www.yuque.com/docs/share/ca61dff6-146e-4398-80d7-4b8a1c5226ea?#gLFu2) 日常查询实用博文
* [关于前端大管家 package.json，你知道多少？](https://juejin.cn/post/7023539063424548872) 详细讲解 package.json 文件的配置（思维导图很赞）；
* [Node.js 进程、线程调试和诊断的设计和实现](https://mp.weixin.qq.com/s/bv-ZpzGWVRj1spBTj-uG2Q) 介绍 Node.js 中，关于进程、线程调试和诊断的相关内容。
* [记一次排错经历——npm缓存浅析](https://juejin.cn/post/6844903785018425351) 关于NPM缓存的问题实践 和 原因分析
* [关于依赖管理的真相 — 前端包管理器探究](https://mp.weixin.qq.com/s/t6RZAKb6mXTfXl7XbpZ_vw) 对Node依赖总结比较完整的博文
* [zx](https://github.com/google/zx) Google 的 zx.js 库有助于使用 Node.js 高效且愉快地编写 shell 脚本。
* [Pkg](https://github.com/vercel/pkg)这个工具可以将 Node.js 应用打包成单个可执行文件，没有安装 Node.js 也能执行。
* [前端现代包管理器的进化史](https://mp.weixin.qq.com/s/8C9L_z64NUI9kWan64-qAg) PNPM 为什么能逐渐替换 NPM？
* [万字长文 | Seneca: 用Node.js搭建你的微服务架构](https://zhuanlan.zhihu.com/p/361134769) Node.js 搭建微服务入门教程
* [pnpm](https://pnpm.io/zh/)一个老牌的 node.js 包管理器，支持 npm 的所有功能，用来替代 npm。它的模块是全局存储，每个项目内部使用硬链接，所以很省空间，而且安装速度快。
* [2022 前端包管理方案-pnpm 和 corepack](https://juejin.cn/post/7060448346107805732) 简单总结了Node 包管理器相关 - cnpm,yarn, pnpm, 以及 Corepack
* [用 Node.js 手写一个 DNS 服务器](https://mp.weixin.qq.com/s/Gl94ISY5N4BYyYmVT9-QFQ) DNS 是实现域名到 IP 转换的网络协议，当访问网页的时候，浏览器首先会通过 DNS 协议把域名转换为 IP，然后再向这个 IP 发送 HTTP 请求。
* [浅析 path 常用工具函数源码](https://mp.weixin.qq.com/s/mbQC-NVlHg-7QW1c8T8xbA) 深入Node.js Path 模块
* [Fresh 框架](https://fresh.deno.dev/) 上周，基于 Deno 的 Fresh 框架发布了预览。该框架直接使用 TypeScript 脚本，号称零配置、零构建，页面由服务端渲染，客户端不需要 JS 生成内容，也没有多余的 JS 脚本，追求小而快，值得关注。
* [Aleph.js](https://alephjs.org/) Aleph.js 是另一个基于 Deno 的全栈框架，类似于 Next.js，目前处于早期开发阶段，也可以关注。
* [Express](https://expressjs.com/) 牌的 Node.js 框架 Express，最近要发布5.0版了。这是一件大事，因为4.0版是八年前发布的。这篇文章介绍了5.0版的新特性。
* [Koa 源码剖析](https://mp.weixin.qq.com/s?__biz=Mzg5NzcxMDY5Nw==&mid=2247488772&idx=1&sn=4dc98818b7ff92654700def21504b088&chksm=c06cfa02f71b7314424f567947b189735c005a846c796a6b14fda105bdbda908105cbfcf544b&token=903578161&lang=zh_CN#rd) Koa 源码分析
* [试图颠覆 JavaScript 生态？亲身试用新 JS 运行时 Bun 后，我觉得未来可期](https://mp.weixin.qq.com/s/Nd8_MSXOHPUM2GyvvpQfhg) 关于 Bun 的介绍【译文】
* [2022 推荐关注这个零运行时且支持 TS 的 CSS-in-JS 框架](https://mp.weixin.qq.com/s/OpCQJaSbzqWEykAh_qGJfQ) Vanilla Extract  是一个新的 CSS-in-JS 库，用来编写 CSS 样式文件，于 2021 年开源，在年度全球 CSS 报告中荣登 CSS-in-JS 满意度榜首。
* [Bun：Node.js 的替代品（英文）](https://semaphoreci.com/blog/javascript-bun#what-is-bun) Bun 是 Zig 语言写的 JavaScript 服务器运行环境，目标是兼容 Node.js，并且将打包器、转码器、包管理都包含在内。本文是对它的测评，最终评价很不错。
* [他来了！性能吊打 Node.js 和 Deno 的新一代 javaScript 运行时！](https://mp.weixin.qq.com/s/mdBKAMqJ44xEg-QepNCQ4w) Bun.js 刚开源不到一个月就获得了 19.5k star！看起来马上就会成为 Node.js 和 Deno 的一大竞争对手了！ 只是beta版，它还有很长路要走！
* [Node.js 19 的新功能（英文）](https://blog.appsignal.com/2022/11/15/nodejs-19-release-whats-new.html) 四项新功能
* [go-get-folder-size](https://github.com/markthree/go-get-folder-size) 一个 Node.js 库，可以递归获取一个文件夹的大小，采用 Go 语言编写，要比 Node.js 原生实现快得多。
* [2023 年值得关注的10大 Node.js 开源项目！](https://mp.weixin.qq.com/s?__biz=MzU2MTIyNDUwMA==&mid=2247512141&idx=2&sn=b06bddcffd6271063e25f77ad6f2b838&chksm=fc7efe16cb097700379c4c2a781a78eb8d5cb90e6440c2755a81f5bb6a1f3e3671e6e4cb47bf#rd)
```
Next.js
Nuxt.js
Fastify-vite
Mercurius
Platformatic
Prisma
Redwood
Strapi
Herbs.js
PNPM
```
* [用 Node.js 手写 WebSocket 协议](https://mp.weixin.qq.com/s/S0GxZZ-vhZfV6YT5Du827Q)实时性较高的需求，我们会用 websocket 实现，比如即时通讯、游戏等场景。（ 原理图 绘制的不错，简单清晰；）
* [Sharing](https://github.com/parvardegr/sharing) 一个命令行工具，生成一个二维码，可以把本机文件分享给局域网内的手机。（Node 版本16以上）
* [2023 年的前端渲染框架 ](https://mp.weixin.qq.com/s/9o_9Bmq9oxuzeQ7HdQ_CiQ) Astro、Eleventy、Enhance、SvelteKit、Gatsby、Next.js、Nuxt、Remix 前端渲染Node框架对比
* [Node.js 是如何跑起来的](https://mp.weixin.qq.com/s/_1YdX2wavRJhy2aOCsHP4w) NodeJS 源码分为三层：JS、C++ 以及 C。
```
JS 层提供面向用户的调用底层能力的接口，即各种 NodeJS 原生模块，如 net、http、fs、DNS 以及 path 等
C++ 层主要通过 V8 为 JS 层提供与底层交互的能力，起到类似桥梁的作用，通过 V8 不仅实现 JS 的解释执行，还扩展的 JS 的能力边界
C 层主要包括 Libuv 这一跨平台的异步 IO 库以及其他第三方 C 库
```
* [Node.js v18 和 v19 的新功能（英文）](https://blog.logrocket.com/exploring-competitive-features-node-js-v18-v19/) 本文简要介绍 Node.js v18 和 v19 新引入的一些重要功能。
* [基于 HTTP Range 实现文件分片并发下载！](https://mp.weixin.qq.com/s/J55UtidL_WI0zSJM1C7kXQ) Node 实现断点续传、切片上传 Demo讲解
* [Node.js 20 为啥要搞个权限模型？到底有啥用？](https://mp.weixin.qq.com/s/LrNYU6L-wfEYXZfB8uzjyg)4月18号，Node.js 发布了 V20 版本，当前处于 Current 状态，预计会在今年 10 月份进入长期支持状态。目前 Node.js 的权限模型还是相当初级的阶段，还有很多能力需要完善，比如可以限制服务的网络请求白名单，这样就可以避免 SSRF 漏洞等等
* [浏览器中跑 Node 已在Safari中支持](https://blog.stackblitz.com/posts/webcontainers-are-now-supported-on-safari/) 在浏览器端跑 Node.js 的尝试 Web Container，已经支持在 Safari 中运行了。
* [收藏！10 个 React Server Component + Next.js 开源项目分享 ](https://mp.weixin.qq.com/s?__biz=MzU3NTg5MjU1Mw==&mid=2247485218&idx=1&sn=bd938bbb40360c8d26011e992c5e4d33&chksm=fd1d7a04ca6af312e09fdec07a60806e5f765cf3220df7a7354f1e0737fe089ed1500504f5af&token=372471149&lang=zh_CN#rd) 推荐一些 RSC + Next.js App Router 相结合的开源项目示例