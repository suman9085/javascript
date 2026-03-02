function add(arr){
 let sum = 0
 for(let i=0; i<arr.length ;i++){
    sum = sum + arr[i]
 }
  return sum;
}
let arr = [1,2,4,6,8,9,11,20]
let res = add(arr)
console.log(res)
