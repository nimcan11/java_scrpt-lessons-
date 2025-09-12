// getting elements 
const color = document.querySelector("input#color");
const Body = document.querySelector("body");
const ul = document.querySelector("ul");
const h2 = document.querySelector("h2");
const btn = document.querySelector("button");

// make a function that handels value of input 
let all_colors= JSON.parse(localStorage.getItem("colors")) || [];

let lastcolor=localStorage.getItem("last color");
let setData = ()=>{
     Body.style.backgroundColor = lastcolor;
    h2.style.color= lastcolor ?"#fff" : "#000";

       
    all_colors.forEach((color,index)=>{
        // console.log(`color ${index + 1}:${color}`);
         const list = document.createElement("li");
      
      list.textContent=`color:${index + 1 }${color}`;
      list.style.backgroundColor=color;
      ul.appendChild(list)
    });
    

}
let color_changer = ()=>{
    const input_color = color.value;
    all_colors.push(input_color);
    lastcolor=input_color;  // last color 
    // console.log(all_colors);
    // console.log(lastcolor)
    // console.log(input_color);
    Body.style.backgroundColor = lastcolor;
    h2.style.color="#fff";
    localStorage.setItem("colors",JSON.stringify(all_colors)); // storing all colors in local storage 
    localStorage.setItem("last color",lastcolor)
      const list = document.createElement("li");
    all_colors.forEach((color,index)=>{
        // console.log(`color ${index + 1}:${color}`);
      
      list.textContent=`color:${index + 1 }${color}`;
      list.style.backgroundColor=color;
      ul.appendChild(list)
    });

    // clear button 
 
  
}
  const clearall = ()=>{
        localStorage.clear();
        ul.innerHTML=""
           Body.style.backgroundColor = "#FFF";
             h2.style.color="#000";
             color.value="";
        
};

color.addEventListener("input",color_changer)
setData();
  btn.addEventListener("click",clearall);



