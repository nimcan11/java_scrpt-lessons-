// getting elements 
const btn = document.querySelector("button.open");
const btn_close=document.querySelector("button.close");
const service = document.querySelector("div.service");

btn.addEventListener("click",()=>{
    service.scrollIntoView({behavior:"smooth"})
})

let count = 1;
window.addEventListener("scroll",()=>{
    console.log(scrollY);
})