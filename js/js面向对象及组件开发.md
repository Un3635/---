### 面向对象编程（oop）
  * 抽象：抓住核心的东西，简单的意思就是将公共的东西进行抽取出来
  * 封装：只能通过对象来访问方法
  * 继承：从已有的对象上继承出新的对象
  * 多态：多对象的不同形态，复用代码

### 遗漏知识点
   * new 之后的方法就是构造函数，当new创建一个对象的时候，即使在方法中没有返回，默认返回值就是this,也就是该对象的实例
   * 对象的引用 基本数据类型在赋值的时候，只是值的复制；而对象类型：赋值不仅仅是值的赋值，而且也是引用的传递
   ```js
   // 第一种：
   var a = 1; var b = a; b = 2; console.log(a,b); // => 1; 2
   // 第二种
   var a1 = [1,2,3]; var b1 = a1; b1.push(4); console.log(a1, b1); // 1 2 3 4； 1 2 3 4
   // 第三种
   var a2 = [1,2,3]; var b2 = a2; b2 = [1,2,3,4]; console.log(a2, b2); // 1 2 3； 1 2 3 4
  // 虽然第三种也是引用赋值，但是b2在赋值时候，会重新给他分配内存空间，此时b2与a2已经没有关系了

  // 第四种
  var a3 = 5, b3 = 5; console.log(a3 == b3, a3 === b3); // true; true 基本类型，值相同就可以
  var a4 = [1,2,3], b4 = [1,2,3]; console.log(a4 == b4, a4 === b4); // false; false 对象类型，值和引用都必须相同

   ```
   * 基本数据类型 string number boolean null undefined object
   * 引用数据类型 object array function
   * prototype(原型)的作用: 将公共的方法和属性在内存中只存在一份（提高性能）
     * 原型方法与普通方法的区别
        - 原型方法可以复用
        - 普通方法没有办法复用
   * 包装对象：基本类型都有自己对应的包装对象
      > string的包装对象String
      > boolean的包装对象Boolean
      > number的包装对象Number

#### this的指向问题
   在事件和定时器的情况下 比较容易出现this的指向问题
   * ``console.log(this); // this指向的是window`` 方法是谁调用的，this就指向谁，如果方法是自执行或者是没有对象调用，this指向的是window
   * 闭包中this指向全局对象，new 中指向本身