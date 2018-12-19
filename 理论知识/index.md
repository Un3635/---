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