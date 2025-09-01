
// creating elements and setting attribute each elements 
const section_comment=document.createComment("this is a comment");
console.log(section_comment);
const section =document.createElement("section");
const div=document.createElement("div")
const heading =document.createElement("h1")
const paragraph=document.createElement("p")
const btn =document.createElement("button")
// setting each of thme a class 
section.setAttribute("class","hero_page")
div.setAttribute("class","card")
paragraph.setAttribute("class","content")
heading.setAttribute("class","her_title")
btn.setAttribute("id","btn1")

// creating text node 
let h1_txt=document.createTextNode("this my first js dom")
let p_txt=document.createTextNode("i learn dom well,alxamdulilaah")
let btn_txt=document.createTextNode("clik hear");

// adding elements use append child 

heading.appendChild(h1_txt);
paragraph.appendChild(p_txt);
btn.appendChild(btn_txt)
section.appendChild(div);
div.appendChild(heading);
div.appendChild(paragraph);
div.appendChild(btn);
document.body.appendChild(section);


// declareing 
console.log(section);

