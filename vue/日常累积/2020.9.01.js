/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-09-01 09:49:39
 */
const status = 1;

// setTimeout(() => {
//   const status = 2;
//   const data = {
//     status: 3,
//     getStatus() {
//       return this.status;
//     }
//   }
//   console.log(this)
//   console.log(data.getStatus())
//   console.log(data.getStatus.call(this))
// }, 0)

function test() {
   const status = 2;
  const data = {
    status: 3,
    getStatus() {
      return this.status;
    }
  }
  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}

// test();


// var data = [1,2,3];
var data = {
  name: '1',
  age: 18,
  data: {
    sex: '2'
  }
}
for(const [,index] of Object.entries(data)) {
  console.log(index)
}

// let [,,index3] = data;
// console.log(index3)