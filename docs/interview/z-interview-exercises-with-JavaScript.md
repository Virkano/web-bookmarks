# JavaScript面试题

JavaScript面试的题目，主要考察的内容还是逻辑性为主。基础的部分，主要是对内置函数的使用，比如String, Math, Array对象。还有一个比较讨面试喜欢的，就是正则表达式。

## 作用域链

JS核心部分需要理解的一个重要部分。

## 闭包

## 原始对象

```javascript
var a = 1;
a.a = 2;
console.log(a.a);
```

这一题需要理解的是点的作用，在JS解释器中，首先会判断左侧的变量是什么类型，如果是普通对象，会创建一个新的对象作用域，然后挂载a属性。console.log部分的a也是又创建了一个封装对象，但是这个对象下面的a是没有赋值的。

## 引用类型

```javascript
var a = {n:1};
var b = a;
a.x = a = {n:2};

alert(a.x);// --> undefined
alert(b.x);// --> [object Object]
```

这个涉及到了连续赋值的情况，详情参考javascript 连等赋值问题.在程序运行到之后，先确定好了 a.x 和 a 的引用，再从右往左开始赋值的。还有一点就是可以理解的是.运算优先级高于=运算符，所以会先创建a.x对象，然后在执行赋值过程。赋值顺序从右向左。

## 原型链

JS核心部分的另一个需要理解的重要部分。

## 类型转换

比较时候的转换的原则:

- 一个是number一个是string时，会尝试将string转换为number
- 尝试将boolean转换为number，0或1
- 尝试将Object转换成number或string，取决于另外一个对比量的类型

运算过程的转换原则：

- 字符串与数字相加，变成字符串
- 字符串与数字相减，变成数字

## 输出下面几个代码

```javascript
function foo1(a){
    return a + '01';
}

foo1(01);
```

```javascript
function foo2(a){
    return a + '010';
}

foo2(010);
```

```javascript
console.log(0.2 + 0.4);
```

```javascript
var foo = "11"+2-"1";
console.log(foo);
console.log(typeof foo);
```

## 基础的代码使用技巧

- 生成[x,y]范围的随机整数
- 已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”
- 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”
- var numberArray = [3,6,2,4,1,5]; 实现倒排，排序。
- 怎样添加、移除、移动、复制、创建和查找节点
- 将一个#fffff类型的数据转换为rgb(255,255,255)形式

## 正则表达式

### 去除字符串中的多余空格？

如果使用了\s作为匹配的情况，有没有消除不了的情况（是有的），具体是什么？

### 为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义

```javascript
function escapeHtml(str) {
return str.replace(/[<>”&]/g, function(match) {
    switch (match) {
                   case “<”:
                      return “&lt;”;
                   case “>”:
                      return “&gt;”;
                   case “&”:
                      return “&amp;”;
                   case “\””:
                      return “&quot;”;
      }
  });
}
```

### 写一个function，清除字符串前后的空格。(兼容所有浏览器)

```javascript
if (!String.prototype.trim) { 
 String.prototype.trim = function() { 
 return this.replace(/^\s+/, "").replace(/\s+$/,"");
 } 
} 

// test the function 
var str = " \t\n test string ".trim(); 
alert(str == "test string"); // alerts "true"
```

## 中级难度的

### 实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制

- 考察点1：对于基本数据类型和引用数据类型在内存中存放的是值还是指针这一区别是否清楚
- 考察点2：是否知道如何判断一个变量是什么类型的
- 考察点3：递归算法的设计

```javascript
// 方法一：
Object.prototype.clone = function(){
        var o = this.constructor === Array ? [] : {};
        for(var e in this){
                o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
        }
        return o;
}

//方法二：
  /**
     * 克隆一个对象
     * @param Obj
     * @returns
     */
    function clone(Obj) {
        var buf;
        if (Obj instanceof Array) {
            buf = [];                    //创建一个空的数组 
            var i = Obj.length;
            while (i--) {
                buf[i] = clone(Obj[i]);
            }
            return buf;
        }else if (Obj instanceof Object){
            buf = {};                   //创建一个空对象 
            for (var k in Obj) {           //为这个对象添加新的属性 
                buf[k] = clone(Obj[k]);
            }
            return buf;
        }else{                         //普通变量直接赋值
            return Obj;
        }
    }
```

### 如何消除一个数组里面重复的元素？

```javascript
myArray.filter(function(elem, pos,self){return self.indexOf(elem)== pos;})
```

filter是过滤的意思，filter通过一个函数的参数来选择什么项需要被filter掉，函数返回true保留，false干掉。

函数参数带三个参数，第一个elem是这一项元素，第二个pos是这一项所在的位置，第三个self指的是执行filter的数组。那么，你看，巧妙吗:self.indexOf(elem) 是指这个项目在数组中的位置，位置是第一个，也就是说同样的项目在第一位和第5位都出现了，他返回的是0，而此时pos还是4，所以通过self.indexOf(elem) == pos 能判断出这一项是不是重复出现的项，如果是（返回false），则干掉它。

### 编写一个JavaScript函数，输入指定类型的选择器(仅需支持id，class，tagName三种简单CSS选择器，无需兼容组合选择器)可以返回匹配的DOM节点，需考虑浏览器兼容性和性能。

```javascript
var query = function(selector) {
                var reg = /^(#)?(\.)?(\w+)$/img;
                var regResult = reg.exec(selector);
                var result = [];
                //如果是id选择器
                if(regResult[1]) {
                    if(regResult[3]) {
                        if(typeof document.querySelector === "function") {
                            result.push(document.querySelector(regResult[3]));
                        }
                        else {
                            result.push(document.getElementById(regResult[3]));
                        }
                    }
                }
                //如果是class选择器
                else if(regResult[2]) {
                    if(regResult[3]) {
                        if(typeof document.getElementsByClassName === 'function') {
                            var doms = document.getElementsByClassName(regResult[3]);
                            if(doms) {
                                result = converToArray(doms);
                            }
                        }
                        //如果不支持getElementsByClassName函数
                        else {
                            var allDoms = document.getElementsByTagName("*") ;
                            for(var i = 0, len = allDoms.length; i < len; i++) {
                                if(allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
                                    result.push(allDoms[i]);
                                }
                            }
                        }
                    }
                }
                //如果是标签选择器
                else if(regResult[3]) {
                    var doms = document.getElementsByTagName(regResult[3].toLowerCase());
                    if(doms) {
                        result = converToArray(doms);
                    }
                }
                return result;
            }

            function converToArray(nodes){
                  var array = null;         
                  try{        
                        array = Array.prototype.slice.call(nodes,0);//针对非IE浏览器         
                  }catch(ex){
                      array = new Array();         
                      for( var i = 0 ,len = nodes.length; i < len ; i++ ) { 
                          array.push(nodes[i])         
                      }         
                  }      
                  return array;
          }
```

## 理解下sort排序的原理

数组的sort方法，默认是按照ascii排序的，为了对数字进行区分，还是手动传入一个sort函数。

```javascript
var arr = [11,2,28,5,8,4]
arr.sort(function(a,b){return a-b})
```

sort的参数是一个排序函数，我们可以把参数a当作数组里靠后的元素，b当作数组里靠前的元素，排序函数return的值如果是正的，才执行排序，所以最后排下来是从小到大，相反，如果return的是b-a，那么就是从大到小排序。

## apply和call方法的异同

对于apply和call两者在作用上是相同的，即是调用一个对象的一个方法，以另一个对象替换当前对象。将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。

但两者在参数上有区别的。对于第一个参数意义都一样，但对第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。 如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 。

## 在Javascript中什么是伪数组？如何将伪数组转化为标准数组？

伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。

### 想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）

- 给需要拖拽的节点绑定mousedown, mousemove, mouseup事件
- mousedown事件触发后，开始拖拽™
- mousemove时，需要通过event.clientX和clientY获取拖拽位置，并实时更新位置
- mouseup时，拖拽结束
- 需要注意浏览器边界的情况

## 偏门的

### 输出一下代码

```javascript
function a(x){
    return function b(y){
        return y+x++
    }
}

var a1 = a(10)
var a2 = a(20)

a1(10)
a2(10)
```

```javascript
var a = {n:1};
var b = a; // 持有a，以回查
a.x = a = {n:2};
alert(a.x);// --> undefined
alert(b.x);// --> [object Object]
```

## 不同的颜色标记出来页面中各层的HTML

```javascript
[].forEach.call($ $(""),function(a){
 a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
 })
```