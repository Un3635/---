## BOM(Browser Object Model 浏览器对象模型)
   定义了js操作浏览器的方法和属性
   1. 方法
      ```js
        window.open(url, type);
        window.close();
      ```
  1. 属性

  * window.navigator.userAgent 浏览器的内核,版本
  * window.location 打印出来的是地址栏参数，但其的数据类型是object
    * window.location.href 地址栏蚕食
    * window.location.search 得到地址栏?后的内容（包括?）
    * window.location.hash 得到地址栏#后的内容（包括#）

   