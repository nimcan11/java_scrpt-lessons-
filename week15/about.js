// getting elements 
let backBtn = document.querySelector("button.back");
let forBtn = document.querySelector("button.forward");
backBtn.addEventListener("click",()=>{
    history.go(1);
})
// forward 
forBtn.addEventListener("click",()=>{
    history.go(-1)
})
