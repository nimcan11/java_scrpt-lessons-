// get the element 
const  btn = document.querySelector("button");
// btn.onclick= ()=>{
//     console.log("waa la i taabtey!!")
// }

// On context neue 
oncontextmenu= ()=>{
    console.log(btn);
}

// double click 
// btn.ondblclick=function(){
//     console.log("you make a double click");
// }

// Onmous  down event is triggered when the user presses down a mouse button on an element (but hasn’t released it yet).

// btn.onmousedown=()=>{
//     console.log("you make on mouse down");
// }

// On Mouse enter 
// btn.onmouseenter = ()=>{
//     console.log("you my inside my button ");
// }
// btn.onmouseleave = ()=>{
//     console.log("you leave the mouse arae")
// }

// On mouse move it make intraction any time you move inside the element 
btn.onmousemove = ()=>{
    console.log("You make a move!!")
}

// keyboard events 
const input = document.querySelector("input");
input.onkeyup= function Event(){
   let value = input.value;
   console.log(value);
}
// on key press 
const input_email = document.querySelector("input.email");
input_email.onkeypress=()=>{
    console.log("You make on key press ")
}

// Clipborad events 

// -- oncopy 
// input_email.oncopy=()=>{
//    let email_value = input_email.value;
//    console.log(email_value);
// }
// -- opaste 
input_email.onpaste = function(){
    console.log("email doesn't allowed to paste ")
}
// -- on cut 
input_email.oncut = function(){
    console.log("you make cut  ")
}

// on focus - used for to focus your code 
input_email.onfocus= ()=>{
    console.log("you make an focus");
}
// on blur to back the focus 
input_email.onblur=()=>{
    console.log("you make a blur");
}

// oniput - it tracks  your input , the most used one 
input_email.oninput=()=>{
    console.log(input_email.value);
}



