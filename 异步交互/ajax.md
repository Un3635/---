### ajax的原理
 用javascript异步的去操作xml
### ajax与axios与fetch的区别
 - ajax 与 axios 相同点 都是对xmlhttprequest的封装
 - ajax 与 axios 不同点
    * ajax是通过回调的函数进行调用的，而axios是通过promise对象
- fetch是xmlhttprequest的更好的解决方案，来获取后台数据，但是fetch的支持情况不是很好
- fetch不会将cookie发送给服务器
### promise对象
 *并没有添加新的功能，只是优化了异步编程的写法，一定程度上避免了回调的这个天坑，但并不是最终方案,最好的方案是es7的异步函数,搭配babel*
### es7异步
*async, await*