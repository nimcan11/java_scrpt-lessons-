// 
let backBtn = document.querySelector("button.back");
let forBtn = document.querySelector("button.forward");
backBtn.addEventListener("click",()=>{
    history.back();
})
// forward 
forBtn.addEventListener("click",()=>{
    history.forward()
})

console.log(history.length)