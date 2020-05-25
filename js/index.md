### Object 原型链下的方法
* toString() 并不能将{}对象转换为字符串
* toString() 可以将[] 对象转换为字符串 
`` [1,2].toString() // "1,2"``
``JSON.stringify([1,2]) // "[1,2]"``
* toString() 一般用来判断对象的类型 
``Object.prototype.toString.call([1,2]) // "[object Array]"``
``Object.prototype.toString.call({name: '12'}) // "[object Object]"``