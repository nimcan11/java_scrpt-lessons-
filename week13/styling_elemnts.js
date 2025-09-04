let box = document.querySelector("div.box"); // box one 
// let box2 = document.querySelector("div.box2"); // box two 
// box.style.width="200px";
// box.style.height="100px";
// box.style.backgroundColor="blue";


// // using css txt another way 
// box2.style.cssText = "background-color:red; width:200px; height:150px";

// box.style.cssText = "width: 200px; height: 150px; background-color: red; font-size: 20px; border-radius: 10px;";


/// dom transversing 

const text_one = box.children[0];
// console.log(text_one); /// text one 
// use next sibbling the new one 
const text_two = text_one.nextElementSibling;
// console.log(text_two); // txt two 
// using preveiw 
let qoraaal = text_two.previousElementSibling;
console.log(qoraaal);