# WebAssembly 高质博文
* 主要包含 WebAssembly 文章， wasm 是体积小且加载快的二进制格式， 其目标就是充分发挥硬件能力以达到原生执行效率

* [WebAssembly 中文网|Wasm 中文文档](https://www.wasm.com.cn/) 入门开发 主要看官网教程
* [2021 年大前端技术趋势解读](https://www.infoq.cn/article/dT002EZ7BiXGtMeU49qo)
```
2019 年 12 月 15 日 WebAssembly 正式成为 WorldWide Web Consortium (W3C) 的标准，加入到了 HTML、CSS 和 JavaScript 的行列，继而成为浏览器官方的标准的第四门语言。WebAssembly 也正式抵达了 1.0 版本，获得了主流浏览器 Firefox、Chrome、Safari 和 Edge 的支持。
```
* [实践解析 | 如何通过 WebAssembly 在 Web 进行实时视频人像分割](https://juejin.cn/post/6985102448759635981) 前端热点 WebAssembly 相关博文
* [说一说Web端侧AI](https://mp.weixin.qq.com/s/9PoFZVs7jiI992y6MWLqUQ) 本文介绍什么是端智能，运用场景，以及Web端侧实现 AI 的基本原理概念；
* [深入 WebAssembly 之解释器实现篇](https://mp.weixin.qq.com/s/hktDuC1nky06tAaAi-mwMA) WebAssembly（为了书写方便，接下来简称为 Wasm）笔者《WebAssembly 原理与核心技术》读后感，如何实现一个 Wasm解释器。
* [WebAssembly 2021 年回顾与 2022 年展望](https://mp.weixin.qq.com/s/1ZW8_XW1yqqSeBAAYWNUdg) wasm 的总结文章， 这块业界文章还是太少
* [Wasm 玩出花？在浏览器中运行虚拟机！](https://mp.weixin.qq.com/s/RQq8K7GmLysAx55Vuk-K5A) wasm 应用实践博文
* [W3C 发布 WebAssembly 2.0 初版草案](https://www.oschina.net/news/191993/wasm-2-0-public-drafts) wasm 版本迭代官方公布消息
* [前端视角解读 Why Rust](https://mp.weixin.qq.com/s/AXXJnFdwYDiy5vfZ-fvVDQ) 目前 Rust 对 WebAssembly 的支持是最好的，对于前端开发来说，可以将 CPU 密集型的 JavaScript 逻辑用 Rust 重写，然后再用 WebAssembly 来运行，JavaScript 和 Rust 的结合将会让你获得驾驭一切的力量。
* [硬核冷知识：V8与WebAssembly不得不说的秘密](https://laocuicode.cn/daydream/2022/04/01/202241-%E7%A1%AC%E6%A0%B8%E5%86%B7%E7%9F%A5%E8%AF%86%EF%BC%9AWebAssembly/)
* [WebAssembly最新进展与未来方向 - 视频](https://mp.weixin.qq.com/s/C_97w2Vrf1C_YspIG4fMIA) 有中文字幕，官方的阶段性小结
* [Cutter - Web视频剪辑工具原理浅析](https://mp.weixin.qq.com/s/hNIY9Wbqnpg9QErbYqMUWQ) WebAssembly 运用于视频领域小结
* [pcljs](https://pcljs.org/zh-cn/) 个工具将大型 C++ 库 Point Cloud Library (PCL) 编译为 WebAssembly，运行在浏览器中，供 JavaScript 调用。
* [WebAssembly 多语言/宿主环境中的使用](https://mp.weixin.qq.com/s?__biz=Mzg2ODQ1OTExOA==&mid=2247503275&idx=2&sn=a78e150a7ce9627d518cdc23105bed2c&chksm=cea97aaaf9def3bcb70f14661e5806f89899e2a166f3970616029a4fdd41ee1cf5da4b366755&token=236307061&lang=zh_CN#rd) 本文主要讲解WebAssembly (WASM)  如何运行在不同的宿主环境中, 。它是一种经过验证的，可以在 Web 中运行大型复杂应用程序的方法。
* [WebAssembly 模块化与动态链接](https://mp.weixin.qq.com/s/MPBwFuL2CYFVXIowoB542A)  本文讲述WebAssembly 的模块化演进，介绍其模块化和动态链接的关键设计和实现，以及当前面临的挑战和未来的发展趋势。
* [WebAssembly 调试原理和方法简介](https://mp.weixin.qq.com/s/kCfe3sbUgmhzLqD2cLddjQ) 本文围绕 WebAssembly 的源码调试，阐述若干相关的问题
```
1）使用Chrome调试 AssemblyScript
2）lldb+wasmtime 调试原生代码
3）独立工具WasmInspect调试
```