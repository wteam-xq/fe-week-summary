# 前端安全博文
* XSS 攻击, CSRF 攻击, 钓鱼攻击, HTTP参数污染, 远程代码执行， 浏览器新安全策略等 相关博文

* [egg 前端安全文档](https://eggjs.org/zh-cn/core/security.html)
* [cookies - SameSite那些事](https://mp.weixin.qq.com/s/QZkOXhQIg2LqDWpi7mzCdQ)
* [2020年中国互联网网络安全报告](https://www.cert.org.cn/publish/main/46/2021/20210721130944504525772/20210721130944504525772_.html)
* [前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
* [前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html) 关于CSRF攻击讲解很详细的博文
* [浏览器隐身模式下的你，仍然没有任何隐私](https://mp.weixin.qq.com/s/nISm93vAiG3iCqtQIeg7Sg) 挺有意思的博文， 从日常生活、技术角度较全面的讲解了浏览器 隐身模式 各种数据统计 和 技术实现问题。
* [如何用不可见的字符来实现 JavaScript 代码后门。](https://certitude.consulting/blog/en/invisible-backdoor/)  在存在不受信代码的平台，如 FaaS 平台可能就会遇到这样的问题。
* [理解log4Shell 漏洞](https://sspai.com/post/70394) 诸如「互联网正在着火」「过去十年最严重的漏洞」「现代计算机历史上最大漏洞」「难以想到哪家公司不受影响」
* [你真的了解 “随机数”？](https://math.haozi.me/random.html) 数学家要做的事，就是要找到一个通项公式，公式完全对你公开，但要推出 seed，需要难度超出攻击的成本。
* [通过几行 JS 就可以读取电脑上的所有数据？](https://mp.weixin.qq.com/s/1oDNxf5xHwlUUpJSVkqazg) 浏览器Spectre 漏洞，计算机硬件层面上的漏洞。
* [一文彻底搞懂前端沙箱](https://mp.weixin.qq.com/s/uu0H2MTO1z1b8nsfuoyLQw) 对前端沙箱比较全面的讲解，可惜CSS隔离没展开，讲解内容较少
* [比 eval 和 iframe 更强的新一代 JavaScript 沙箱！](https://mp.weixin.qq.com/s/wAI-L3we6uK0HvvPtOcIjg) 进入 statge3 的新的 JavaScript 提案：ShadowRealm API。
* [以 Log4j 为例，如何评估和划分安全风险](https://mp.weixin.qq.com/s/2eCzDAX4orgEXu1rvhZSNA) 5个方面处理第三方库安全风险
* [深入Chrome 102 新特性PNA (Private Network Access) 机制与相关异常](https://mp.weixin.qq.com/s/XNVhQkuEuZ6Z2fVWVyt-ww) 谷歌浏览器102 PNA 结合实际场景的分析贴， 较实用，mark!
* [抖音三面：硬件加速中的“层”和层叠上下文中的“层”，是一个东西吗？](https://mp.weixin.qq.com/s?__biz=Mzg2Nzc0NzQ3OQ==&mid=2247486037&idx=1&sn=d4092fd57179d180103dfeaf42f6ee17&chksm=ceb799adf9c010bbcb74db69e01b04dbb3c1f4cd1c266e4be0805a4e7954c9cd049bf8b8e6db&token=903578161&lang=zh_CN#rd) 隐式合成 造成 层爆炸 - 低端机浏览器 卡顿原因
* [Web 应用身份验证的未来？WebAuth 介绍](https://mp.weixin.qq.com/s?__biz=MzkxNTIwMzU5OQ==&mid=2247494467&idx=1&sn=b55ed5c175b81c6f9141d98f2fe142cd&chksm=c1601823f6179135ed047dfd9ac003429a8f9db47edd952c3d0bda96d29bbbf7b3b287740ea7&token=903578161&lang=zh_CN#rd) 对系统密码 存储、漏洞等有较为详细的讲解，高质博文
* [Meta 如何实现大规模无身份信息认证](https://mp.weixin.qq.com/s/N3Z91-Lj6w_j7Zv8hc7nnw) 匿名凭据服务（Anonymous Credential Service，ACS） 实现登录， 客户端创建令牌、进行盲签名，发服务端，服务端签名令牌返回，客户端执行非盲操作，客户端发送HMAC（Hash message authentication codes，散列过的消息认证代码）, 服务端检查HMAC 验证 shared_secret 对比本地计算的 shared_secret 以完成校验。
* [React 的一些最佳安全实践](https://mp.weixin.qq.com/s/KNbOa19OOnP6Rh1Uk2iotw) React 注意的安全问题
* [前天，知乎把你的信息藏在了截图里。](https://mp.weixin.qq.com/s/EykLVZA6MQ3kgKvZFKfR9g) 知乎水印事件， 数据安全相关
* [Awesome Cloud Security 云安全资源汇总](https://wiki.teamssix.com/cloudsecurityresources/) 这个项目收集云安全领域的博客、公众号、文章、工具、书籍、视频等资源。
* [browsertunnel](https://github.com/veggiedefender/browsertunnel) 这个软件可以将用户信息，通过网页的 DNS 请求传回服务器。注意，不是 HTTP 请求，而是使用查询域名的 DNS 请求夹带额外信息。这种监视用户的方法，很难发现，也很难阻止。
* [进行模糊测试，寻找另类的漏洞](https://mp.weixin.qq.com/s?__biz=MzIzMTIzNTM0MA==&mid=2247488861&idx=1&sn=b5f54f689c4e1ac59910d76201eac58c&chksm=e8a61f3edfd1962862b88237a46be8357cefcd17712a8a5e4c75857205d5a941d83915
* [电子邮件加密指南（中文版）](https://emailselfdefense.fsf.org/zh-hans/) 自由软件基金会发布的详细操作步骤，如何在各种平台上对邮件使用 GnuPG 加密。
* [Web 终极拦截技巧（中文）](https://hughfenghen.github.io/posts/2023/12/23/web-spy/) 本文介绍 Web 平台常见的拦截 HTTP 通信的方法，以及如何注入拦截代码。
* [GitHub 的评论附件漏洞（英文）](https://www.bleepingcomputer.com/news/security/github-comments-abused-to-push-malware-via-microsoft-repo-urls/) 本文指出 GitHub 有一个漏洞，用户可以在任意仓库的讨论区上传附件，然后这个附件的 URL 就属于这个仓库。
* [绕过https证书报错](https://thomascountz.com/2025/07/17/chromes-ssl-bypass-cheatcode)Chrome 浏览器遇到网站证书错误，会显示一个报错页面，谁能想到，它居然有后门，只要输入口令thisisunsafe，就能跳过这个页面。
