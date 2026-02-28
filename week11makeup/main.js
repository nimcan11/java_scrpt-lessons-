// getting elements 

const my_name = document.querySelector(".my_name");
console.log(my_name.textContent);

// accesing elemnts 
my_name.textContent = "Nimcan Odowa";
console.log(my_name.textContent);

// getting attribute 
const input = document.querySelector("input");
console.log(input);
console.log(input.getAttribute("type"))
// settong attributes 
input.setAttribute("class","Username")