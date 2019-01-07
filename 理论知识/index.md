1. isNaN('1') -> false; isNaN('xx') -> true
2. isFinite(testValue) 用于检测参数的是否是一个有限数字 isFinite() -> false; isFinite(null) -> true; isFinite(undefined) -> false
3. 数据类型
```
基本数据类型: Null undefined Boolean number string symbol
引用数据类型： object function

```
4. null undefined NaN的区别
```
1. null 表示空
2. undefined 表示没有定义
3. 保留值 // 很少用 
其中 null == null 是 true; undefined == undefined 是true; NaN == NaN 是false
MDN 上的代码
当检测 null 或 undefined 时, 前者会执行类型转换：
  typeof null        // "object" (因为一些以前的原因而不是'null')
  typeof undefined   // "undefined"
  null === undefined // false
  null  == undefined // true
  null === null // true
  null == null // true
  !null //true
  isNaN(1 + null) // false
  isNaN(1 + undefined) // true

```
5. 判断的优先级
6. 在默认模式中，无论最初采用什么表示法声明数字，Number 类型的 toString() 方法返回的都是数字的十进制表示。因此，以八进制或十六进制字面量形式声明的数字输出的都是十进制形式的。
```
var iNum = 10;
alert(iNum.toString(2));	//输出 "1010"
alert(iNum.toString(8));	//输出 "12"
alert(iNum.toString(16))

```

##### 作用域
变量 函数的可以访问的范围
if for while 是不会重新创建一个作用块的

##### this上下文
上下文取决于 调用的对象

##### 闭包
有权访问另一个作用域的变量，参数和变量不会被回收
好处： 1. 保护函数内部变量的安全，实现封装，防止变量与其他环境发生命名冲突
      2. 在内存中维持一个变量，可以做缓存
      3. 匿名自执行函数可以减少内存消耗
坏处：增大了内存的消耗，用完之后进行赋值

##### 为什么需要 hash 和 history
```
对于 vue 这种 渐进式（在原有 的项目基础上可以尝试引用一两个组件当插件用）前端， 为了构建 SPA, 需要引入前端路由，改变视图的同时不会向后端发起请求
1. hash #之后的字段并不会包含在http请求中
2. histroy 利用了HTML5 新增的history 的pushState() replaceState()
```
##### 单页面和多页面的区别
```
单页面 只有一张主页的应用, 浏览器一开始加载所有的js css html, 初次耗时多，页面的复杂度也比较高

```