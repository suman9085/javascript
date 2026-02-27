//operator
//Arithmetic oerator or // assinment operator
// let a = 10;
//  let b = 20;
//  let c = a + b;
// console.log(c);

//Substraction
// let a = 20
// let b = 10
// let c = a - b
// console.log(c)

//Multiply
// let a = 4
// let b= 2
// let c= a * b
// console.log(c)

//Division
// let a = 60
// let b= 3
// let c = a / b
// console.log(c)

//compaarison operator
// let a = 20;
// let b = "20"
// console.log(a>b)
// console.log(a>=b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a ==b)
// console.log(a===b) //type check(dono same type ke hone chaiye ===, uske baad wo comparison )

//loops 
// for(let i=0;i<10;++i){
//     console.log(i)
// }

//while loop
// let i = 0; //pahle value declare uske baad compare phi print uske baad inizilisation
// while(i<10){
//     console.log(i)
//     ++i
    
// }

//do while loop
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i<10)

//if else condition
// let age = 20
// if(age >=18){
//     console.log("Eligible ")
// }
// else{
//     console.log("not eligible")
// }

//===============loops(for,while)
// for(i=0;i<10;i++){ // isme sab yek sath karte hai
//    console.log(i)
// }
// let arr = [10,20,30,40]
// var sum = 0;
// for(let i = 0; i< arr.length ; ++i){
//      sum = sum +arr[i]
//     console.log(sum)
// }
//while loop
// let a = 0   //pahle value decare uske baad condition check karte hai uske baad increment karte 
// while(a<10){
//     a++
//     console.log(a)
// }

//====================Arrays method================
// let numbers = [10,20,30,40]               // ye for loop se array nikala hai 
// for(let i=0;i< numbers.length; ++i){
//     console.log(numbers[i])
// }

//foreach===========// foreach ke sath array nikalna hai 
// let numbers = [10,20,30,50]
// numbers.forEach((num)=>{
//     console.log(num)
// })

//map ==========//naya array return karta hai lekin ye sab data nikal deta hai
// naya array return karne ke liye yek variable me store karna hoga
// let arr1 = [10,20,40,50]
// let result = arr1.map((arr)=>{
//     return arr * 2
// })
// console.log(result)

//filter============= // naya array return karta hai lekin conditon ke hisab se 
//=============jo data chahiye bas wahi nikal sakte hai
// let num1 = [1,2,3,4,5]
// let res = num1.filter((num)=>{
//   return num %2 === 0
// })
// console.log(res)

//reduce ============// array ke sare number ya value ko mila ke ek final value bana deta hai

// let numbers = [20,30,40,50]
// let result = numbers.reduce((sum,num)=>{
//   return sum +  num
// },0)
// console.log(result)

//===========object manipulation=============
// let user ={
//     name:"lava",
//     age:25,
//     city:"noida"
// }
// console.log(user)

// let user = {
//     name:"lava",
//     age:25,
//     city:"noida"
// }
// user.name = "innovation"
// user.age = 30
// console.log(user)

//===========Destructuring============

// andar ka data bahar nikal deta hai
// let user = {
//     name: "lava",
//     age:25,
//     city:"delhi"    
// }
//  let{name,age} = user;
//  console.log(name)
//  console.log(age)

//array ke sath destructuring

// let number1 = ["lava",20,"noida"]
// let [name,age,city] = number1
// console.log(name)

//spread operator  // copy kar dena 
// let nums1 = ["lava",30,"noida"]
// let nums2 = [...nums1,"cs"]
// console.log(nums2)

// spread operator object ke sath
// let user ={
//     name:"lava",
//     age:20,
//     city:"delhi"
// }
// let newuser = {
//     ...user,
//     branch:"cs"
// }
// console.log(newuser)

//==========optional chaining 

// let user={     // khali object aur console me ham koi data print karaye to error aaega ?. use kiye to undefined bata dega

// }
// // console.log(user.address.city)
// console.log(user.address?.city)

// let user = {
//     address :{
//         city:"noida"
//     }
// }
// console.log(user.address?.city)

//=================json========
// {
//     "name":"lava",
//     "age":25,
//     "city":"noida"
// }

//==============math.random============
// console.log(Math.random()) //har baar kpoi naya value dega 

//================math.round()=============
// console.log(Math.round(4.7)) // decimal ko upar ya neeche pura number banta hai //nearest number

//=========Math.floor() // ye neeche ki or jata hai // hamesha niche
// console.log(Math.floor(4.7))
// let num = Math.floor(Math.random() * 10) + 1
// console.log(num)

//=============math.max()========= //isme maximum value deta hai
// console.log(Math.max(10,20,30,40))

//===============math.sqrt()===============
// let num1 = 16  // square root nikalna 
// let result = Math.sqrt(num1)
// console.log(result)

// let numbers = 235
// let res = Math.sqrt(numbers)
// console.log(res)

// let numbers = 235
// let res = Math.floor(Math.sqrt(numbers))
// console.log(res)

// let nums = -9
// let result = Math.sqrt(nums)
// console.log(result)

//=======================toUpperCase()=================
//ye small lettres to big letters
// let name = "lava"
// let res = name.toUpperCase()
// console.log(res)

// let city = "indore"
// console.log(city.toUpperCase())

//==============tolowerCase()===========
// let name = "LAVA"
// let res = name.toLowerCase()
// console.log(res)

//============charAt()==================
// string ke specific character nikalna //string me kaunsa letter chahiye index number do
// let name ="suman"
// let res = name.charAt(2)
// console.log(res)

//============slice()===============
//ye slice(start,end)
// let name = "suman"
// console.log(name.slice(0,3))

// let name = "lava"
// console.log(name.slice(1))
// let arr = [10,20,30,40,50]
// let res = arr.splice(2,4)
// console.log(res)

//==========split()============
//string to array convert karta hai
// let name = "suman yadav"
// console.log(name.split(" "))

// let text = "lava company"
// let res = text.split(" ")
// console.log(res)

//===============trim()==============
//=======string ke aage aur piche ka extra space hata dena 
// let name = "     lava     "
// console.log(name.trim())

//=============Array/ me push()=============
//array ke last me value add karta hai
// let arr = [10,20,30,40]
// arr.push(50)
// arr.push(70)
// console.log(arr)

//===============pop()=============
//array ke last me se value remove karta hai
// let arr = [10,20,30,40]
// arr.pop()
// console.log(arr)

//==============shift()=============
//array ke first se value delete kar dena
// let arr = [10,20,30,40]
// arr.shift()
// console.log(arr)

//=================unshift()==========
//array ke satarting me value add karta hai

// let arr = [10,20,30]
// arr.unshift(5)
// console.log(arr)

//============map()================
//har yek element pe kaam karta hai aur yek naya array return karta hai
// let arr1 = [10,20,30,40]
// let result = arr1.map((num)=>{
//   return  num * 2
// })
// console.log(result)

//==============filter============
//ye bhi naya array return karta hai lekin jo data chahiye use nikal sakte hai
// let arr1 = [10,20,30,40]
// let res = arr1.filter((num)=>{
//     return num > 20
// })
// console.log(res)

//==========reduce==========
//array ke sab value ko mila kar yek value bana deta //add kar deta hai
// let arr = [1,2,3,4,5]
// let result = arr.reduce((sum,num)=>{
//    return sum + num
// },0)
// console.log(result)

//==============sort=============
//arry ko order me kar deta hai (string ke liye)

// let arr = ["lava","mobile","company"]
// arr.sort()
// console.log(arr)

// let arr = [10,40,30,20]
// let res = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(res)

// let arr = [20,10,40,30]
// let res = arr.sort((ar,br)=>{
//     return ar - br
// })
// console.log(res)

//===========Date,Date.now()=============
// current time deta hai
// let time = Date.now()
// console.log(time)

// let start = Date.now()
// let end = Date.now()
// console.log(end - start)
// console.log(new Date())

// let id = Date.now()
// console.log(id)

//=================getFull year()==========
//current date ka year nikalta hai(4 digit)
// let date = new Date()
// console.log(date.getFullYear())

//===================getMonth()============
//current date ka month nikalta hai //month numbering 0 se start hota hai
// let d = new Date()
// console.log(d.getMonth())

//==============getDate()=============
//month ka day batata hai (tarik)
// let d = new Date()
// console.log(d.getDate())

// let d = new Date("2026-12-20")
// console.log(d.getDate())

//============getTime()===========
//kisi bhi date ka timestamp(milliseconds) deta hai
// let date = new Date()
// console.log(date.getTime())