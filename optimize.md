# 性能优化 高质博文
* 主要包含 前端性能优化相关文章； 前端 无代码、低代码、微前端、 Serverless 等话题都整合这里

* [性能优化应该怎么做？](https://mp.weixin.qq.com/s/D4DcO0yxF43XsoM9kKBi5w)
* [避免重绘回流的重要性](https://juejin.cn/post/6953029989306466317#heading-0)
* [JS如何实现二叉堆](https://www.zoo.team/article/binary-heap-with-js)
* [组件库按需加载原理分析](https://mp.weixin.qq.com/s/ty4IUtLlTgxdc8-7_UGyiQ)
* [一个让 git clone 提速几十倍的小技巧](https://mp.weixin.qq.com/s/2Eyg9ExBWicBwuQq5VoGug)
* [我优化了进度条，页面性能竟提高了70%](https://mp.weixin.qq.com/s/yk7llzupEwkKdMwwGeenzQ) 关于前端动画很有启发的博文
* [利用机器学习通过网页预提取技术加快网站加载速度](https://mp.weixin.qq.com/s/S1Yg6wiYkK2lN-5aTp2dqQ) 不明觉厉系列
* [从场景倒推我们要什么样的微前端体系](https://mp.weixin.qq.com/s/Xb-P9ubzrXGmtTE8xhK8TQ) 这篇文章面向的是还没有在业务中使用过微前端的同学或团队，通过这篇概览，可以简单的建立对 「微前端」的整体认知；
* [Serverless Custom (Container) Runtime](https://mp.weixin.qq.com/s/AinmCj3iJEkP4Fwq5mSTQw) Serverless 相关文章
* [Vision 内核大升级——可视化搭建引擎 Gems 应运而生](https://mp.weixin.qq.com/s/iwYN4a_YNosyjTGBodCm9Q)
* [“硬核JS” - 你的程序中可能存在漏洞](https://juejin.cn/post/6984188410659340324) - 关于前端（可能不止前端）内存泄露讲解的很不错
* [关于浏览器缓存较全面分享文章](https://www.yuque.com/docs/share/eab142fc-a0e0-432f-921a-eb0f8705dec4?#%20%E3%80%8A%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E3%80%8B) 有干货！
* [百万PV商城实践系列 - 前端图片资源优化实战](https://juejin.cn/post/6989751020255445005?from=main_page) 业务实践总结博文一般有干货
* [腾讯企鹅辅导 H5 性能极致优化](https://mp.weixin.qq.com/s/zJMM4SF7pc6LZPCsQfWOxw) 网站性能优化 实践总结，有干货！
* [如何进行Web性能监控](http://www.alloyteam.com/2020/01/14184/) 文章内容大部分与性能优化相关， 分类到该版块！
* [你的 Tree-Shaking 真的起作用了吗？](https://jishuin.proginn.com/p/763bfbd2de0d) 无关代码移除，代码优化相关
* [React Profiler 的使用](https://mp.weixin.qq.com/s/L9sSAR0iaoFSpMnzARfxcw) React 性能优化 工具介绍
* [Service Worker 简介](https://developers.google.com/web/fundamentals/primers/service-workers) 谷歌官方的 Service Worker 教程，介绍什么是 PWA 应用，以及怎么开发，写得非常好，很容易懂。官方提供中文版翻译。
* [浏览器渲染之节流重绘](https://mp.weixin.qq.com/s/EFwNP3EK8_D_azXEW-7WMA) 面试必读文章系列， 这文章质量较高
* [从 fabric 源码来看如何做好一个 canvas 库](https://mp.weixin.qq.com/s/OtKqeE0FnLLxHZUk02dj-w) 源码分析系列，Dom 节点 和 Canvas 节点对比图 比较赞！
* [防抖节流场景及应用](https://mp.weixin.qq.com/s/XzqwfdG4-whUaAxxnXITmg) 性能优化 实用教程， 防抖 和 节流 函数对比图 不错
* [Web图像组件设计的最佳实践](https://mp.weixin.qq.com/s/-T5107cpL_HsW-JP6LeHSg) 涉及不少性能相关 细节， 如 CSS新特性：aspect-ratio, <img>元素的 srcset 和 sizes等；
* [“web资源加载优先级”原来能这么精准控制](https://mp.weixin.qq.com/s/kaT3qAku86_ihSJA8oC0yQ) 系统总结了 浏览器加载资源优先级 内容（包含新特性）
* [web性能优化的15条实用技巧](https://mp.weixin.qq.com/s/9FwdceS1x96jLlU93kZBfw) 15个性能优化小结
* [快速掌握 Performance 性能分析：一个真实的优化案例](https://mp.weixin.qq.com/s/T_Z_xKByZwbrvERoG-1OFw) 性能优化的目标就是找到 Task 中的 long task，然后消除它。因为网页的渲染是一个宏任务，和 JS 的宏任务在同一个 Event Loop 中，是相互阻塞的。
* [从浏览器渲染原理谈动画性能优化](https://mp.weixin.qq.com/s/NU9YcneQYuTjS_izPXmK3w) 动画性能优化实践总结，干货较多！
```
《Webkit 技术内幕》指出，如果满足下列条件，则会创建一个 RenderObject：
DOM 树中的 document 节点；
DOM 树中的可见节点（webkit 不会为非可视节点创建 RenderObject 节点）；
为了处理需要，Webkit 建立匿名的 RenderObject 节点，如表示块元素的 RenderBlock（RenderObject 的子类）节点。
```
* [浅析TypeScript Compiler 原理](https://mp.weixin.qq.com/s/MuzJ7vVBY81lFn3OwMrBow) 扫描器、解析器、绑定器、检查器、发射器
* [和大多数的前端开发者相比，我并没有选择node.js做cli而投靠了golang。](https://juejin.cn/post/7057178581897740319) 关于构建 CLI， 工作流， 低代码、零代码 总结挺不错 
* [HTTP缓存协议实战](https://mp.weixin.qq.com/s/23WJXJFGJ-iMP6x-lFQ8og) 缓存的本质就是用空间换时间，以临时存储的数据暂时代替数据源中读取最新的数据。
* [HTTP 缓存别再乱用了！推荐一个缓存设置的最佳姿势！](https://mp.weixin.qq.com/s/43pa04szJ2zU_IyVP4LraQ) 前端缓存实践，性能优化相关
* [从 chromium 源码来窥探浏览器的渲染](https://mp.weixin.qq.com/s/r1nAcEkEoE1D7CgQwqSe2Q) 复习浏览器渲染相关知识
* [前端技术分享：页面性能优化问题复盘](https://juejin.cn/post/7064405926035324964) 根据火焰图 排查问题的方法值得借鉴
* [过度使用懒加载对 Web 性能的影响](https://mp.weixin.qq.com/s/Yb4bN_jjVOo2xUDPeKD_GA) 如今懒加载已经是一种 Web 标准，大部分的主流浏览器都支持通过 loading="lazy" 属性使用懒加载。
* [得物AppH5秒开优化实战](https://mp.weixin.qq.com/s/23ZFPK4CaCkinwpZ3SG9Rw) 开始我们的H5页面秒开率只有30%左右，现在我们的H5页面秒开率达到了 75%。这中间巨大的差异究竟有哪些黑科技在里面？
* [Web页面全链路性能优化指南](https://mp.weixin.qq.com/s?__biz=Mzg4NTE3NTY4Mg==&mid=2247485744&idx=1&sn=fd04230edff9c4291ac132c956266dfd&chksm=cfadadddf8da24cb447d3b5194ee54e19875a2d5974f7f34ec571634e1ea0708c163c4d084cd&token=1008676742&lang=zh_CN#rd) 比较全面的Web性能优化博文
* [vue项目你一定会用到的性能优化！](https://mp.weixin.qq.com/s?__biz=MzI4OTY2MzE0OA==&mid=2247499195&idx=1&sn=e3f08d9cdbdc1ac97e458b35018228ff&scene=21#wechat_redirect) vue的这些优化，通用适用于React
* [性能优化——图片压缩、加载和格式选择](https://mp.weixin.qq.com/s?__biz=Mzg3NTcwMTUzNA==&mid=2247486786&idx=1&sn=f9f805bd4572c5a0854d50817ceb0652&chksm=cf3c3933f84bb025659ed77d80002de55db633ac465cf61c9e14b704959b0037867d3e7a4844&token=868444553&lang=zh_CN#rd) 针对图片的性能优化， 压缩图片、选择正确格式、 CDN 加速、懒加载等。
* [作业帮直播间前端架构优化实践](https://mp.weixin.qq.com/s/zVRLRV16vr8eudFcVKqm2w) 直播间架构性能优化实践小结
* [这⼀次彻底弄懂：React 服务端渲染](https://mp.weixin.qq.com/s/j2rB8qE5OOPmLHAS7qdCrQ) 关于服务端渲染 汇总比较全面的博文
* [HTTP史记 - 从HTTP/1到HTTP/3](https://mp.weixin.qq.com/s/B7K00-wTUSmy87caDHRWFA) HTTP 0.9 到 HTTP 3.0 小总结
* [前端研发的新基础设施 - Rust 🦀️](https://mp.weixin.qq.com/s/JOnz0IVWRm_bYWReACyWAg)  Atom 团队放弃维护 Atom，转身投入到一个新的轻量级、更快的编辑器 Zed 的开发，而这个编辑器最大的特点就是将全部基于 Rust 来构建。Rust 连续 7 年成为最受开发者喜欢的语言！
* [精读《web reflow》](https://mp.weixin.qq.com/s/uaNTKwdXDSVLixF4Rz1H3Q) 网页重排（回流）是阻碍流畅性的重要原因之一
* [去掉 jQuery 后，我们的网站性能起飞，速度快了 17%](https://www.infoq.cn/article/koVBVMOUEzirP1iZWpww) 去掉JQ，使用原生JS 速度可以更快！
* [React 官网为什么那么快？](https://juejin.cn/post/7128369638794231839) 简单讲解了浏览器渲染流程， 以及CSR、SSR、SSG、preload 等常见站点优化特性，值得收藏
* [一文彻底搞懂React 服务端渲染](https://mp.weixin.qq.com/s/kSOfWsbssDS_pTiMkuHN1w) React服务端渲染的原理 部分讲解较为详细
* [会用 Performance 工具，就能深入理解 Event Loop](https://mp.weixin.qq.com/s/22tS74K5JQr1V98Q4DPqJg) 性能优化 工具使用实践
* [异步分片计算在腾讯文档的实践](https://mp.weixin.qq.com/s/d5M_-8XqFGYnpif7GQNmLA) React Scheduler 出来很久了，也有很多文章介绍，但在业务中真正能用到的地方很少。实现一个异步调度器很容易，也没什么技术难点，但对业务的提升是巨大的。
* [console.log 一定会导致内存泄漏？不打开 devtools 就不会](https://mp.weixin.qq.com/s/5a9hHVc024Pl3c3Lyp08eg) nodejs 打印的是序列化以后的对象，所以是没有内存泄漏，生产环境也是可以用 console.log 的，没有内存泄漏问题。
* [性能优化经验分享](https://mp.weixin.qq.com/s/ZfIWKRbF3Yq7sNFG2TsQFw) 还在看那些老掉牙的性能优化文章么？这些最新性能指标了解下：FP & FCP、LCP、TTI、FID、TBT、CLS。关键指标： FCP/FID/CLS
* [天猫汽车商详页的SSR改造实践](https://mp.weixin.qq.com/s/9HRmEICJX-m5AguD833SFQ) 淘宝技术汽车技术团队 页面 CSR -> SSR 优化实践总结
* [HTML性能优化-Prerender2.0机制解读](https://mp.weixin.qq.com/s/VP-tnwWPMEB4PprqCsiXwg) 比较性的浏览器特性， 实际线上环境还不能使用，先mark
* [可能是全网最基础的前端项目优化，一站式、深度解读常用手法](https://juejin.cn/post/7215828320403095610) 23W代码项目性能优化实践分享
* [提升 Web 核心性能指标的 9 个建议](https://mp.weixin.qq.com/s/RVswilfm0MMOBGaMs_3b4g)  Chrome 团队花费了一年的时间确定了每个核心 Web 指标的三项最佳建议，这些建议对于大多数网站都是相关的，并且对于大多数开发人员来说也是实际可行的。
* [《现代图片性能优化及体验优化指南》全集](https://mp.weixin.qq.com/s/LN-fBf-RigSfS_XtU_19JQ) 最新最全的图片性能优化总结博文
* [我把文件重新编码后，加载速度提升 300%！](https://juejin.cn/post/7244498421284225085)  性能优化： 文件流方式减小体积，文件压缩相关
* [如何删除未使用的 CSS 代码？](https://mp.weixin.qq.com/s?__biz=MzU2MTIyNDUwMA==&mid=2247515344&idx=2&sn=9d27a6cbfea7cbc07fcd8d7cdc1135c1&chksm=fc7ef28bcb097b9d03a80c66e219b2c3b175c51ea517dc6e7f9869af4d2d3b1a00f4dea26f5d&token=2133551871&lang=zh_CN#rd) 本文将介绍一种强大的工具——PurgeCSS，它可以自动检测和删除未使用的 CSS 代码。
* [Chrome 浏览器运行原理你了解多少？](https://mp.weixin.qq.com/s/wjrcO2Ej7BEThWVsCnXEtA) 详细介绍浏览器运行原理
* [实践指南-前端性能提升 270%](https://mp.weixin.qq.com/s/i-VySols_FbPEpZJeSbCLw?poc_token=HPWOImWjz1l6edCiHcz7frKvuj_0q3wbcmYy8Heg) 京东旗下某网站优化实践分享
* [新一代 Web 预渲染技术！](https://mp.weixin.qq.com/s/M6wJN8jBLxnuSva-lw7-_A) `Speculation Rules API`可取代`<link rel="prerender"...>`语法
```
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next17.html"]
      }
    ]
  }
</script>
```
* [巧用 curl 查看连接时间（英文）](https://susam.net/blog/timing-with-curl.html) 本文介绍了一个小技巧，可以用 curl 查看网站连接的各种时间指标。
* [如何优雅的控制网页请求的优先级](https://mp.weixin.qq.com/s?__biz=Mzk0MDMwMzQyOA==&mid=2247499326&idx=1&sn=863ab04e1e6d73943f2675e192b31a6b&chksm=c2e10b15f59682036f05d0adf86cf6bbc88ee21a9bf83f8016a0f0f9f1d4f76e1c49b5d99875&token=475052323&lang=zh_CN&scene=21#wechat_redirect) 对于一个网页的性能和体验来讲，控制好请求发起的优先级是非常重要的，网络带宽是有限的，优先去加载重要的资源，让次要的资源延后，就可以让我们的网站体验提升一个台阶。
* [前端性能优化实践](https://mp.weixin.qq.com/s?__biz=MzUyMDAxMjQ3Ng==&mid=2247503939&idx=1&sn=7f9e97e04530082a5dfba60b59a81248&scene=21#wechat_redirect) 比较全面的前端性能优化 理论分析 和 实践总结分享
* [5.25秒变0.023秒：小程序图片优化全攻略](https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247497970&idx=1&sn=2893fc003334d9d1b8b79c8e84948169&scene=21#wechat_redirect) 小程序图片加载实践总结