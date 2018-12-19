#### apply call bind
```
1. 均是为了改变指针对象，第一个参数都是this要指向的对象，都可以利用后续参数传参；
2. bind是返回对应函数，便于稍后调用，apply、call是立即调用；
eg:
var arr = [12, 10, 33];
console.log(Math.max.apply(Math, arr),Math.max.call(Math, 12, 10, 33));
// 或者 Math.max.apply(null, arr); Math.max.call(null, 12, 10, 33);
// 或者 apply中第二参数必须是数组，call的除第一参之外，其他数值必须具体
// 改写 log 方法

 function log() {
    console.log.apply(null, arguments);
  }
  log(1, 3);


  MDN上的代码
  var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

var button = document.getElementById("button"),
    text = document.getElementById("text");
button.onclick = function() {
    alert(this.id); // 弹出text
}.bind(text);
但由于ie6~ie8不支持该方法，所以若想在这几个浏览器中使用，我们就要模拟该方法，这也是面试常考的问题，模拟的代码如下：

 

if (!function() {}.bind) {
    Function.prototype.bind = function(context) {
        var self = this
            , args = Array.prototype.slice.call(arguments);
            
        return function() {
            return self.apply(context, args.slice(1));    
        }
    };
}


```
#### 获取数组中的最大值 最小值
```
1. 除以上方法外
2. 见 js/

```

#### 伪数组 
--- 什么是伪数组， 不能常规的数组操作，比如push, for-in, map
1. arguments
2. document.querySelectorAll('.div7')
3. 对象 var m = {}; m = [0] 

伪数组转变成正常数组
```
1. Array.prototype.slice.apply(arguments);
2. for in
3. es6 中方法  var arg = Array.from(arguments);
4. jq 中的 toArray makeArray 
var aDiv = $('div');
console.log($.isArray(aDiv)); //false
var aDiv = aDiv.toArray(); //实例方法
var aDiv = $.makeArray(aDiv);//静态方法
console.log($.isArray(aDiv));//true

```

#### 拷贝
```
Object.assgin 是浅拷贝
1. 浅拷贝
 function shallowObj(src) {
    if (typeof src === 'object') {
      var newObj = src instanceof Array ? [] : {};
      for (var o in src) {
        if (src.hasOwnProperty(o)) {
          newObj[o] = src[o];
        }
      }
      return newObj;
    }
  }
  var shallowObj = shallowObj(obj);

  2. 深拷贝

  function deepCopy(src) {
    var newObj = src instanceof Array ? [] : {};
    if (src && typeof src === 'object') {
      for (var i in src) {
        if (src.hasOwnProperty(i)) {
          if (src[i] && typeof src[i] === 'object') {
            newObj[i] = deepCopy(src[i]);
          } else {
            newObj[i] = src[i];
          }
        }
      }
    }

    return newObj;
  }

  var target1 = deepCopy(deepObj);

```
 #### 判断对象
 ```
instanceof typeof constructor Object.prototype.toString.call();
1. typeof　是一个一元运算符， 返回的值是一个字符串 typeof a === 'string', typeof[], typeof {}, typeof null 都是 'object'
2. instanceof 判断一个对象是否为某一数据类型，或者一个变量是否为一个对象的实例
3. constructor 根据对象的构造判断 * constructor在类的继承的时会出错， 继承指的是 , 而instanceof 的简直，直接继承都是true
```
  function a() {
    a.prototype.test = function() {
      console.log('prototype', a.prototype == this);
    }
  }
  function b() {}
  a。b.prototype = new a();
      b.prototype.test();
      console.log('constructor', new b().constructor === a, new b().constructor === b); // true false
      // 需要解决这种方法，通常需要将constructor 重新赋值
      console.log('instanceof ', new b() instanceof a, new b() instanceof b); // true true
  b。b = new a();
      b.test();
      console.log('constructor', new b().constructor === a, new b().constructor === b); // true true
      console.log('instanceof ', new b() instanceof a, new b() instanceof b); // true true
   
```
4. 通用但繁琐的方法 prototype.toString()
```
    console.log(Object.prototype.toString.call(a) === '[object String]');        //true

    console.log(Object.prototype.toString.call(b) === '[object Number]');        //true

    console.log(Object.prototype.toString.call(c) === '[object Boolean]');        //true

    console.log(Object.prototype.toString.call(d) === '[object Array]');        //true

    console.log(Object.prototype.toString.call(e) === '[object Date]');            //true

    console.log(Object.prototype.toString.call(f) === '[object Function]');        //true
```
 ```


 #### 使用js写一个 双向绑定
 代码见 js/双向绑定.js




