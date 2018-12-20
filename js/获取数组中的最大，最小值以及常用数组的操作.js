const arr = [1,2,3,1,4,4,10];
/*************************
 * 获取数组中数字的最大值与最小值 
 */
// 1. 排序 sort
// 2. for 冒泡
// 3. Math.max/min
// 4. es6的扩展运算符

console.log('数组的最大值',Math.max(...arr));


/***************************
 * 数组去重
 */
// 1. indexOf


const uniq  = (array) => {
  var temp = [];
  array.map(item => {
    if(temp.indexOf(item) === -1) {
      temp.push(item);
    }
  })
  return temp;
}
// console.log(uniq(arr))

// 2. 对象去重
const uniq1 = (array) => {
  let temp = [], mapObj = {};
  array.map(item => {
    if(!mapObj[item]) {
      mapObj[item] = 1;
      temp.push(item);
    }
  })
  return temp;
}


// console.log(uniq1(arr))

// 3 排序后相邻去除

const uniq2 = (array) => {
  array.sort();
  const temp = [array[0]];
  for(var i = 1; i < array.length; i++) {
    if(array[i] !== temp[temp.length - 1]) {
      temp.push(array[i]);
    }
  }
  return temp;
}
// console.log(uniq2(arr))

// 4 数组下标法，用的也是indexof 主要是判断当前数字出现的下标与 indexof出现的下标一致吗
const uniq3 = (array) => {
  let temp = [];
  for(var i = 0; i < array.length; i ++) {
    if(array.indexOf(array[i]) === i) {
      temp.push(array[i]);
    }
  }
  return temp;
}
// console.log('uniq3', uniq3(arr))

// 4 利用原型对象上的includes方法
const uniq4 = (array) => {
  let temp = [];
  for(var i = 0; i < array.length; i++) {
    if(!temp.includes(array[i])) {
      temp.push(array[i]);
    }
  }
  return temp;
}
// console.log('uniq4', uniq4(arr))

// 5 利用filter 和 include
const uniq5 = (array) => {
  let temp = [];
  array.filter(item => {
    return temp.includes(item) ? '' :  temp.push(item)
  })
  return temp;
}
// console.log('uniq5', uniq5(arr))

// 6 es6 的set方法
const uniq6 = (array) => {
  return Array.from(new Set(array));
}
// console.log('uniq6', uniq6(arr))

// 7 新旧数组的对比

/****************************
 * 会改变数组的原结构
 */

 // map forEach filter every fill reducer some



 /******************************
  * 各种数组的方法
  */
/*****************************************************************
 * 2. * 数组

    * Array.from(v) : 将伪数组对象或可遍历对象转换为真数组

    * Array.of(v1, v2, v3) : 将一系列值转换成数组

    * find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素

    * findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标

3.* **Array.prototype.forEach(function(item, index){}) : 遍历数组**

  * **Array.prototype.map (function(item, index){}) : 遍历数组返回一个新的数组**

  * **Array.prototype.filter(function(item, index){}) : 遍历过滤出一个子数组**

 * 
 *4. 归并数组的方法reduce（）

var values = [1,2,3,4,5];

var sum = values.reduce(function(prev,cur,index,array){

    return prev + cur;

});

alert(sum); //15
 * 
 */
// foreach
var arr1 = [];
arr1 = arr.forEach(item => {
  console.log('forEach', item);
  return  item > 2; // und
})
console.log('forEach-arr1', arr1); // undefined foreach 并不会返回任何值


// map
var arr2 = arr.map(item => {
  return item > 2;
})
arr2[0] = 'zhu';
console.log('map-arr2', arr2, arr); // 返回一个新的数组对象 


// reduce
var value = arr.reduce((item1, item2) => {
  return item1 + item2;
}, 10);

console.log('reduce-value', value);

// filter
var arr3 = arr.filter(item => {
  return item > 2;
})
arr3[0] = 'name';
console.log('filter-arr3', arr3, arr); // 是找到所有符合条件的，并且是一个新的数组


// find
var arr4 = arr.find(item => {
  if(item > 2) return item;
  console.log(item);
})
console.log('find-arr4', arr4, arr); // arr4 是找到第一个符合条件 之后直接返回


// some
var arr5 = arr.some(item => {
  if(item > 10) return item;
  // return item;
})
console.log('some-arr5', arr5, arr); // arr5  只要有一个满足条件就返回true， 否则就是 false


// every

var arr6 = arr.every(item => {
  // if(item > 0) return item;
  return item;
})
console.log('every-arr6', arr6, arr); // arr6 是必须全部满足条件才返回true， 否则就是 false


var o = {name: 'zhu', age: 18};
console.log('Object.keys', Object.keys(o));





/****************************************
 * 
 * push pop shift unshift
 * 
 */

arr.push(4);
console.log('末尾添加', arr);
arr.pop('zhu');
console.log('末尾减少', arr);
arr.shift('zhu');
console.log('头部减少', arr);
arr.unshift('zhu');
console.log('头部添加', arr);