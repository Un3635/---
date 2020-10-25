<!--
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-07-10 17:35:17
-->
### vue 双向绑定的原理  
  
### vuex的使用
    问题：为什么需要使用vuex， 直接全局设置有什么不同

### hash history两个模式的区别
  - hash的原理 onhashchange的事件
  - history 是根据其api, go() forward(), back()进行前进 后退 跳转的； 而其状态的保存，是通过pushState, repalceState
  - 其区别还在地址栏参数的不同，hash上面会有#
  - 在hash的模式，进行刷新，浏览器请求并不会带#后面的东西，可以任意修改，而在history的模式下，修改path的之后，如果浏览器没有响应的资源，会出现404

### vue的自定义指令
### 指令修饰符
  * v-model的修饰符
    * .lazy：修饰符延迟了同步更新属性值的时机。即将原本绑定在 input 事件的同步逻辑转变为绑定在 change 事件上。
    * .number 若先输入number类型之后再输入数字，其值不会变化，若先输入string之后，再输入number，其值就是string
    * .trim 用来自动过滤字符串前后的空格
  * v-on的修饰符
    * .stop 阻止冒泡
    * .prevent 阻止当前事件的默认行为，比如form表单的提交
    * .self 该指令只当事件是从事件绑定的元素本身触发时才触发回调, 即使点击了它的子元素触发了子元素的事件，按照事件冒泡原理，父元素的事件应当被触发，但是因为事件的触发源并不是事件绑定的元素本身，所以父元素事件不会被触发。
    * .one 表示绑定的事件只会被触发一次
### vue 设置动态路由
### vue 的生命周期
* beforeCreate $el $data都没有进行初始化
* created $data和数据已经初始化完成
* beforeMount
* mounted $el初始化完成
* beforeUpdate
* updated

*一般数据请求和耗时操作放在created中，如果有依赖dom的操作就放在mounted中*

### vue全局监听路由
* 在app.vue 中监听`$route`
* 在vue的beforeRoute中进行监听
* axios中进行监听


### vue知识点
* 子组件中是可以修改prop中的值，只是会发生警告
* 为什么需要使用单向数据流，防止子组件篡改数据，导致数据流难以理解
* 父子组件之间的通信
  1. props
  1. 单向改成双向数据流：
    *场景: 父组件传参给子组件，子组件可以改变数据*
    * 第一种方法 sync的双向绑定
      ```
        // 父组件 show = true
        <div 
        :app-show.sync="show"
        ></div>
        // 子组件
        props: {
          appShow: {
            type: Boolean
          }
        },
        methods: {
          change() { 
            // change方法中可以直接更改父组件的数据
            this.$emit('update:appShow', false);
          }
        }

      ```
    * 第二种方法 v-model （传入值，监听input的值）
  1. 兄弟组件之间的通信
    *状态提升*
    * 使用 event bus,可以使用 $root，提供emit和on的shijian，但是其有一个弊端，谁都发布事件，导致最后的调试出现问题
