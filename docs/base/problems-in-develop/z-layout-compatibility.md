# 排版兼容性问题

## IE下的问题

## IE8

- 不支持css3属性，特别是背景图片size,position,对于圆角可使用PIE.js
- 无法使用media query, 通过插件完成
- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">强制IE8使用最新的内核渲染页面
- 不支持图片opacity,但是可以设置滤镜完成
- max-width在嵌套下有问题

## IE9

- canvas的height不能设置为auto,要么固定，要么动态计算赋值,建议使用Img替代canvas

## Firefox

图片动画抖动，添加translate3d(0,0,0)

## Chrome

通用

[如何解决inline-block元素的空白间距](https://www.w3cplus.com/css/fighting-the-space-between-inline-block-elements)

