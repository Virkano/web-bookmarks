# 浏览器渲染性能优化

## 影响性能的因素

白屏
- HTML 和 CSS 的加载及解析速度
- <code>&lsaquo;head&rsaquo;</code> 内的脚本加载及执行

首屏
- 图片加载
- <code>&lsaquo;body&rsaquo;</code> 内的脚本加载及执行

render tree 的构建
- HTML 的复杂度
- CSS 的复杂度

render tree 的绘制（栅格化）
- 颜色的复杂度
- 形状的复杂度

## 怎么提高前端性能？

提高以下几个方面，总体性能就会得到大幅度提升：

- 缩短白屏时间；
- 加快首屏显示；
- 尽快监听主要操作的事件。

## 优化关键呈现路径

为了在首次渲染时尽可能快，我们需要优化以下三个变量：

- 最小化关键资源数
- 最小化关键字节数
- 最小化关键路径长度

常规步骤:

- 分析并描述关键路径：资源数、字节数和长度；
- 减少关键资源的数量：删掉、延迟下载或标记为异步等等；
- 优化剩余关键资源的加载顺序：尽早下载所有关键资源以缩短关键路径长度；
- 优化关键字节数以减少下载时间（往返次数）。

## PageSpeed 规则和建议

- 排除阻止呈现的 JavaScript 和 CSS
- 优化 JavaScript 的用法
  - 推荐使用异步 JavaScript 资源
  - Avoid synchronous server calls
  - 延迟解析 JavaScript
  - 避免运行时间长的 JavaScript
- 优化 CSS 的用法
  - 将 CSS 放到文档头部
  - 避免使用 CSS import
  - 内联阻止呈现的 CSS

## 参考资料

[Google: Optimizing Performance](https://leohxj.gitbooks.io/front-end-database/content/preference/browser-rendering-performance.html)