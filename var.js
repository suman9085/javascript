//variable kaise banate hai

//...........let..........
// let name = 10;
//  let age = 20 // same variable not declare
// console.log(name,age)

//............const...........
// const account = 1234
// // account = 123 // same variable not declare in const
// console.log(account)

//...........var...............
// var age = 10 // old tarika tha
// var age= 20 //same variable declare in variable
// console.log(age)

//block scope and global scope
// if(true){
//     var a = 20
// }
// var b = 30 // it is declared in global scope
// console.log(b)

// if(true){
//   let c = 40 // cannot declared in  globle scope it is use in block scope
// }
// // let d = 50
// console.log(c)

//const same process it is declared block scope 
// if(true){
//   const a = 10
// }
// // const b= 20
// console.log(a)

//============================data types===================
//primitive data types 
//number/boolean,string, undefined,null

//number
// let a = 10
// let b = 2.23
// console.log("a =",a,"b=",b)

//string
// let name = "lava"
// let str = "hello"
// console.log(name)
// console.log(str)

// boolean
// let login = true
// let f = false
// console.log(login,f)

// undefined
// let user     // variable me value asign nhi kiye to undefined output aayega 
// console.log(user)

//null
// let user = null
// console.log(user)

//==================Non-primitive data types===============
// non-primitive data type me multiple values ka group hota hai
// array ,object, function

//array // yek variable multiple value store karta hai
// let arr = [10,20,30,"lava","company"]
// console.log(arr[1],arr[2])

//object
// let user = {
//   name:"lava",
//   age:20,
//   city:"noida"
// }
// console.log(user.name,user.city)

//function   // as a parameter pass hua
// function add(a,b){
//   return a +b
//     console.log( a + b)
// }
// add(10,20)

// function add (){   // function is a reusable block of code hai jtine baar call karenge utne baar call hoga
//   console.log(2 + 3)
// }
// add()
// add()

//switch conditions
// let a = 2
// switch(a){
//   case 1:
//  console.log("Monday")
//  break;
//  case 2:
//   console.log("Tuesday")
//   break;
//   case 3:
//     console.log("Wednesday")
//     break;
//     default:
//       console("Invalid Day")
// }

