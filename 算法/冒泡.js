/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-02-20 12:00:31
 */
function bubbling() {
  let arr = [2, 5,1,11,4,1,3,10,4], template = [], count=0;
  var i = 0, len = arr.length;
  for(i; i< len; i++) {
    for(j = i+1; j < len; j++) {
      count++;
      if(arr[i] > arr[j]) {
        template = arr[j];
        arr[j] = arr[i];
        arr[i] = template;
      }
    }
  }
  console.log(arr, count);
  
}
bubbling();

function bubbling1() {
  let arr = [2, 5,1,11,4,1,3,10,4], template = [], count = 0;
  var i = 0, len = arr.length;
  for(i; i< len; i++) {
    for(j = 0; j < len - i - 1; j++) {
      count++
      if(arr[j] > arr[j+1]) {
        template = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = template;
      }
    }
  }
  console.log(arr, count);
  
}
bubbling1();