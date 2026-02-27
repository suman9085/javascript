const selectColor = document.getElementById("color")

selectColor.addEventListener("click",(e)=>{
   const selectValue = e.target.value

   document.body.style.backgroundColor = selectValue
})