// function add(num){
// for(i=0; i<num.length;i++){
//   let result = num.filter((num1)=>{
//       num1.length >0
//   })
//   return result
// }
// }
// let nums = [10,5,20,8,15]
// let res = add(nums)
// console.log(res)

// function add(num){
//  let x = 0
//  while(num >0){
//     let xee = num.filter((num1)=>{
//         x = x === xee
//     })
    
//  }
//  return x
// }
// let nums = [10,5,20,8,15]
// let result = add(nums)
// console.log(result)

function add(num){
let res = 0
for(let i=0;i<num.length;i++){
if(num[i] > res){
    res = num[i]
} 
}
return res
}
let nums = [10,5,20,8,15,80]
let result = add(nums)
console.log(result)