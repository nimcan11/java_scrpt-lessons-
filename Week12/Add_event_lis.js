// add event listener 
const btn = document.querySelector("button");
// we use event handeler, it best way for handeling events 
btn.addEventListener("mousemove", ()=>{
    console.log("the mouse is moved")
});

// you can also declare another way for the varibale 
btn.addEventListener("dblclick",event_handler);
function event_handler(){
    console.log(btn.textContent);
}
// using input 
const input = document.querySelector("input");
input.addEventListener("input",function(){
    console.log(input.value);
})

// calling paramas 
const button = document.getElementById("mybtn");
button.addEventListener("click",(kudhufo)=>{
    console.log(kudhufo.target);
})

// class list  
const text = document.querySelector("h3")
const btn1 = document.querySelector("button.addcart")
const btn_remove=document.querySelector("button.remove_class");
const toggle=document.getElementById("toggle");

// handeling claesses  and adding 
btn1.addEventListener("click",()=>{
  text.classList.add("color");
})
// removing 
btn_remove.addEventListener("click",()=>{
    text.classList.remove("color");
})
// making toggle 
toggle.addEventListener("click",()=>{
    text.classList.toggle("color");
    console.log(text.classList.contains("color"));
})

