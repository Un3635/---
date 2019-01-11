### BOM(Browser Object Model 浏览器对象模型)
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

### 文档高度和窗口事件
- 获取可视区的宽高``document.documentElement.clientWidth;document.documentElement.clientHeight``
- 获取body的宽高 ``document.body.clientWidth; document.body.clientHeight`` 获取到body的宽度比可视区的宽度要小16px，而高度是内容撑开的高度

- 滚动距离``document.documentElement.scrollTop``，根据实测，此方法不存在兼容的问题， chrome,firefox,ie 均可以获得滚动的高度

- 内容高度: 指的是真实的内容高度 ``document.getElementById(id).scrollHeight(scrollWidth)``，如果当前元素设置了height, padding, margin, border的时候，此时得到的scrollHeight是height + padding

- 文档高度: 表示当前对象的宽度，高度；在内容的高度上添加border的高度  ``document.getElementById(id).offsetHeight``，比如当前元素设置了height, padding, margin, border的时候，此时得到的scrollHeight是height + padding + border

- 窗口事件
  - onscroll
    window下面的事件,onscroll这个事件并不是拉动的时候触发的，它是在一定的时间内才触发，此时去对比当前滚动条的位置与之前的滚动条的位置的变化，所以在快速短时间内拉动滚动条的时候，其触发的此时比缓慢长时间内触发的次数多

  - onresize
    与onscroll的事件原理一样，也是按照时间间隔来计算的
   