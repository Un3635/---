### DOM(Bocument Object Model 文档对象模型)
   定义了js操作页面的方法和属性

### 节点类型划分
   
   根据nodeType划分节点
   
   * 元素节点： 1
   * document: 9 
      代码：``document.nodeType``
   * 文本节点：3 文本、换行 
      代码： ``document.getElementById(id).childNodes[0].nodeType``
   * 注释节点： 8 ``<!--注释 -->``
      代码：
      ```js
        document.getElementById(id).childNodes
        // 获取注释中的内容
        document.getElementById(id).childNodes[0].nodeValue
      ```
   * 属性节点：2 比如 id
      代码：
      ```js
        // 查看节点的类型所代表的数字
        cument.getElementById(id).attributes[0].nodeType)
        // 查看节点的属性名
        document.getElementById(id).attributes[0].nodeName)
        // 获取属性的value
        document.getElementById(id).attributes[0].nodeValue)
      ```
   childNodes(类数字)：获取某个节点下的所有子节点
   children: 不是标准的属性，但是所有浏览器都支持，是找到某元素下的所有元素节点 
   parentNode： 查找父节点

### 节点的使用


   