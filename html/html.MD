## 行内 
``a span strong  small i image label input select``
## 块状 
``div p h1~h5 form ul ``
## h1~h6 
```css 
h1 32px; h2 24px; h3 ~19px; h4 16px; h5 13px; h6 12px;
```

## 表格 表单
- 表格
  - 在设置表单的时候，需要将各种单元格之间的空隙进行合并```border-collapose:collapose ```[kəˈlæps]
  - 充值单元格之间的默认样式```th,td{padding:0}```
  - 合并横向单元格`` colspan = "2" ``
  - 合并竖向单元格`` rowspan = "2" `` 
- 表单
  - label标签为input元素定义标注 
    ```
    <div>
      <!--for中的值 是input中的id  -->
      <label for="name">name</label>  
      <input type="text" name="name" value="输入姓名" id="name">
    </div>

    ```
  - label 扩大点击范围，点击label的时候，其后面的事件也会被响应

