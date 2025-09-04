// looping elements 


// node list 
const list = document.getElementsByTagName("li")
const btn = document.querySelector("button");
const btn_1 = document.querySelector("button.change");


btn.addEventListener("click",()=>{
    list.forEach((item)=>{
        item.classList.toggle("Active")
    })
})

// html collection 
btn_1.addEventListener("click",()=>{
    for(item of list){
        item.classList.toggle("red")
    }
})

// loopin list items 
for(let i = 0;i<list.length;i++){
list[i].addEventListener("click",()=>{
    for(let rem of list){
        rem.classList.remove("active")
    }
list[i].classList.toggle("active")
})
}
