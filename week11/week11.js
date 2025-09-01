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
// checking and removing attributes 
 const input1= document.querySelector("#input_one")
 console.log(input1);
 if(input1.hasAttribute("name")){
    console.log("it has a name attribute")
 }else{
    console.log("it does not has an a name attribute")
 }
 // checking the value of an attribute 
 if(input1.getAttribute("name")== "nimcan"){
    console.log("nimcaan is the value")
 }else{
console.log("Nimcaan is not a value ")
 }
 // also you can use has attributes 
const h3 = document.getElementsByTagName("h3");
if(h3.hasAttributes){
    console.log("it has an attribute")
}else{
    console.log("it does not have any attribute")
}
// remove attribute 
input1.removeAttribute("name")
console.log(input1)
// setting and adding content inside html file 
const paragraphp=document.querySelector("p");
// set 
paragraphp.textContent="Somliland has intitution last 38 years ";
console.log(paragraphp.textContent)

// setting using inner html 
const president = document.getElementById("president");
president.innerHTML = '<p>The president of Somaliland is Abdirahman Iro</p>';

// using value to track your value 
const my_email=document.getElementById("nimcaan_id");
console.log(my_email.value);
// tracking 
my_email.value="kinaajkiij@gmail.com";
console.log(my_email.value); // tracked and changed





