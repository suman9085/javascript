function calculate(){
const first = document.getElementById("first").value
const second = document.getElementById("second").value
const ope = document.getElementById("ope").value

let result
 if(ope == "+"){
   result = parseInt(first) +  parseInt(second)
 }
 else if(ope == "-"){
  result = parseInt(first) - parseInt(second)
 }
 else if(ope == "*"){
  result = parseInt(first) * parseInt(second)
 }
 else if(ope == "/"){
  result = parseInt(first) / parseInt(second)
 }
 else if(ope == "%"){
  result = parseInt(first) % parseInt(second)
 }
 document.getElementById("res").value = result
}