// function change(xer){
// let xe = 0
// for(i = xer.length; x>0; i--){

// }
// return xer
// }
// let x = 123
// let xr = change(x)
// console.log(xr)

// function change (xer){
//     let xe =  xer.toString().split("").reverse().join("")
//  return xe
// }
// let x = 123
// let xr = change(x)
// console.log(xr)

function change(xtr){
let xe = 0
while(xtr>0){
 let xee = xtr % 10
  xe = xe * 10 + xee
  xtr = Math.floor(xtr / 10)
}
return xe
}
let x = 123
let xr = change(x)
console.log(xr)