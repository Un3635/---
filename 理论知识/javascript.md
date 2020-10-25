<!--
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-07-10 17:35:17
-->
## javascript 的组成
  由三部分组成
  1. ECMAscript(javascript的核心标准，也是一个解析器)
  1. DOM(通过document提供的一些方法或者属性来操作页面)
  1. BOM(通过window提供的一些方法或者属性来操纵浏览器)

* 函数的科里化
```
闭包
```
* 事件机制 事件循环机制 事件流 事件代理

### 事件循环机制
  * 执行上下文
  * 函数调用栈
  * 队列的数据结构

  
  // 就是任务执行的顺序

  ```
  1. JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。
  2. JavaScript的一大特点就是单线程，而这个线程中拥有唯一的一个事件循环

  一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。
任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。
macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。
micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。
  来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。

  事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去。

  其中每一个任务的执行，无论是macro-task还是micro-task，都是借助函数调用栈来完成。
  纯文字表述确实有点干涩，因此，这里我们通过2个例子，来逐步理解事件循环的具体顺序。

    作者：这波能反杀
    链接：https://www.jianshu.com/p/12b9f73c5a4f/
    来源：简书
    简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
  ```
  
### 事件流
  描述的是页面接受事件的顺序
  事件捕获 老版本的浏览器不知处，目前都是用事件冒泡

  