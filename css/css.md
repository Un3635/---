#### css3的属性
```
1. perspective 设置元素被查看的位置的视图

```

#### transfrom
变形，改变。
1. skew(p1, p2) 倾斜 是2D旋转 其两个参数是 p1（纵向， x 轴， 正数， 逆时针）  p2（横向，y轴， 正数 顺时针），起始点在 left top

2. rotate(45deg) 旋转 起始点在 圆心（正数 顺时针， 负数逆时针）

3. scale 缩放 scale(0.5);

4. translate: 移动, 根据给定left(x 坐标)和 top(y 坐标),进行移动

所有的2d转换方法组合在一起，matrix()[ˈmeɪtrɪks] 旋转、缩放、移动、倾斜 


#### transition 实现动态效果
```
允许css的属性值在一定的时间内平滑的过渡， 需要事件的触发，比如单击，获取焦点，失去焦点
4个属性：
 1. 动画哪些属性
 2. 动画的时长
 3. 控制动画的速度变化
 4. 动画是否延迟执行

```
#### 两个div 之间为什么会有空格
```
display: inline-block 导致
设置font-size: 0(在父元素上设置font-size) || float: left;
```

#### 标准的盒模型与怪异盒模型
```
1. 标准的盒模型 width = content(width) + border + padding + margin
2. 怪异盒模型 width = content(width + border + padding) + margin

此时设置 box-sizing
content-box 是标准盒模型，  border-box 是怪异盒模型，设定的width(content + border + padding)

```
#### css中可以继承的属性与不可继承
```
可继承. font-size font-family color
不可继承. border margin padding width height

```
#### css中的复合属性
```
border background margin padding font[font-style font-weight font-size/line-height font-family]
```

#### css 中优先级
```
内联： 1000 id: 100, class: 10, tag：1
但是 如果在父级的class 中设置了样式，而tag 标签又具体到子元素，则是子元素的样式优先, 继承样式的权重最小，!important 优先级最高

```

#### display 的值
```
inline none block table
```
#### 定位 position
```
1. absolute: 最近的已定位祖先元素, 如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块(viewport),并且其之后的float并不起作用
2. relative: 相对的是自身进行偏移。而且对absolute 和 overflow 有限制作用
3. fixed: 相对的是viewport，固定下来
4. static: 没有定位 （忽略 top, bottom, left, right 或者 z-index 声明）
5. float: 相对父元素, 脱离文档
```
#### top 和 margin-top的区别
```
margin-top: 1. 传递的问题, 会将此时的margin-top的值传递给父级, 解决办法 设置父级元素 border: 1px solid transparent 或者设置 overflow, 
              出现这种问题的原因： 嵌套的元素也共享Margin 一个盒子如果没有上补白(padding-top)和上边框(border-top)，那么这个盒子的上边距会和其内部文档流中的第一个子元素的上边距重叠。
              
            2. margin的上下叠压。解决技巧，直接设置margin-bottom 是之前的两部， 这时可以使用BFC(block fragement content)，
                BFC [满足一下的css声明，才会产生BFC]
                1. 根元素
                2. float的值不为none
                3. overflow的值是 不为visible
                4. display的值为 inline-block table-cell table-caption
              
一般都会认为 margin-top只能在 relative下有作用，而 top只能在absoult下有作用，其实并不是的,当使用top的时候，必须设置position为relative,absoulte,static,fixed,
top 并不属于盒子模型的一部份，只是用来定位

```

#### 五大布局
```
1. 单列布局 
  header,content 和 footer 等宽的单列布局
  header 与 footer 等宽,content 略窄的单列布局
2. 两列自适应布局(两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式)
  a. float + overflow:hidden .left {float: left;} .right {overflow:hidden}
  b. flexBox 设置父级display:flex 和 .right {flex:1}
  c.Grid布局
3. 三栏布局(特征：中间列自适应宽度，旁边两侧固定宽度，实现三栏布局有多种方式：)
  a. .left {width: 100px; height: 500px; float:left} .right: {width: 100px; height: 500px; float:right}
      .container {width: auto; height: 500px;}

```

#### 伪类与伪元素
```
伪类：给元素添加特殊的效果 :link :visited :hover :active :focus :blur
伪元素：:after :before :first-letter :first-line [在css2中是一个冒号，但是css3中是两个冒号, 伪元素是创建了一个假的容器，有内容，但是不占位置，不包含任何的dom元素],
  伪元素的使用 
   1. 清楚浮动 .clear:after {content: ''; display: block; clear: both}
   2. 计数器 详见 css/计数器.html
   3. 
```

#### css reset
```
  因为一些样式是浏览器特有的样式，但由于一些样式的在不同的浏览器上的显示不同，所以需要清楚
  比如 与盒模型相关的 margin padding border; 标签特有的样式： ul > li; ol > li
       img 在ie6 上有一定的蓝边和空隙 img{border: none; verter-algin: top}
       a 标签 a {}


normalize.css 和 reset css的区别
1. normalize.css 有下面几个目的
  a. 保护有用的浏览器样式而不是完全去掉
  b. 一般化的样式： 为大部分的HTML元素提供
  c. 修复浏览器自身的bug 保证各浏览器的一致性
  d. 优化css的可用性: 使用一些小技巧
  e. 解释代码：用注释和详细的文档来
  
```