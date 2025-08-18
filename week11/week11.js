console.log(document)
console.dir(document.all)
// get by element using id 
const my_head=document.getElementById("title")
console.log(my_head)

// get element by quaries 
const my_p=document.querySelector("h2")
console.log(my_p)
// body 
let body=document.body
console.log(body)
// title 
let title=document.title
console.log(title)
//by class
const lists = document.getElementsByClassName("lists");
console.log(lists);
// tag name 
const tag = document.getElementsByTagName("li")
console.log(tag);
// select query all 
const selector = document.querySelectorAll("li.lists");
console.log(selector);

// form 
const form = document.forms;
console.log(form);
// link 
const link = document.links;
console.log(link)
// images 
const image = document.images;
console.log(image)

// getting and adding attributes 
// first to get attribute you have to get tag or element 
const input = document.getElementsByClassName("input_user")[0];
console.log(input);
// then get attribute 
console.log(input.getAttribute("type"))
const get_input=input.getAttribute("name");
console.log(get_input);
// setting elements 
input.setAttribute("id","my_id");
console.log(input)
// getting attributes by directly 
console.log(input.className);// my_class
console.log(input.id); // my_id

// you can change attributes 
input.type="password";  // type will be password 
input.className="class2";
input.id="only_id";


