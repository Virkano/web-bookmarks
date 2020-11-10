# JavaScript代码最佳实践

## 不要类型转换

JavaScript是动态类型，但如果你想提高速度不要使用该功能。尽量保持变量的类型一致。这也适用于数组，尽管主要是由浏览器都进行了优化,但尽量不要混用不同类型的数组。这就是为何编译成 JavaScript的C/C++代码使用静态类型的原因之一。

字符串与数字类型间相互转换, 一般使用parseInt函数是正确的。

## 不要重新构造对象

重组对象不便宜，应该避免它, 不要使用delete运算符。

不要以后再添加属性, 尽量不要在以后再添加属性，最好从一开始就定义对象的架构。这在Firefox中快100％，在Chrome中快89％。

## 字符串联连

字符串联连是一个非常昂贵的操作，但是应该用什么方法呢？当然不是Array.prototype.join。

+=运算符似乎比+快很多，他们在两种浏览器上比String.prototype.concat和Array.prototype.join都更快。Array.prototype.join是最慢的，符合市场预期。

## 正确的使用正则表达式

使用RegExp.prototype.exec是没有必要，不是吗？

然而，RegExp.prototype.test和String.prototype.search之间是有性能差异的，让我们来看看哪个方法更快：正则表达式的方法

RegExp.prototype.exec比String.prototype.match快了不少，但他们是不完全一样的东西，它们的区别超出了本文的范围，看这个问答。

RegEx.prototype.test更快，可能是因为它不返回找到匹配的索引。 String.prototype.search应仅用于找到所需的匹配的索引。

然而，你不应该使用正则表达式来查找另一个字符串的位置，你可以使用String.prototype.indexOf方法。

String.prototype.search VS String.prototype.indexOf

另一个有趣的基准是String.prototype.indexOf VS RegExp.prototype.test，我个人预计后者要快，这是在Firefox中发生的事情，但在Chrome中，事实并非如此。 RegExp.prototype.test在Firefox中快32％，而在Chrome中String.prototype.indexOf快33％。在这种情况下，你自己选择喜欢的方式吧。

## 限制声明/传递变量的范围（作用域）

假如你调用一个函数，浏览器必须做一些所谓的范围查找，它的昂贵程度取决于它要查找多少范围。尽量不要依赖全局/高范围的变量，尽量使局部范围变量，并将它们传递给函数。更少的范围查找，更少的牺牲速度。

这个测试告诉我们，从局部范围内传递和使用变量比从更高的声明范围查找变量快，无论是Chrome和Firefox。

## 你不需要所有的东西都用jQuery

大多数开发者使用jQuery做一些简单的任务，我的意思在一些场合你没有必要使用jQuery，你觉得用$.val()始终是必要的吗？就拿这个例子：

```javascript
$('input').keyup(function() {
    if($(this).val() === 'blah') { ... }
});
```
这是学习如何使用JavaScript修改DOM的最重要原因之一，这样你可以编写更高效的代码。用纯JavaScript100％完成同样的功能100%的速度更快:

```javascript
$('input').keyup(function() {
  if(this.value === 'blah') { ... }
});
```

