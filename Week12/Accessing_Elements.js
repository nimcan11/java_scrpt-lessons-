// step one get the elemet
const main = document.querySelector("div.main")
const get_Elemts=main.children;
console.log(get_Elemts);
// Accesing with index 
console.log(get_Elemts[1]);

// using Child node 
const child_node = main.childNodes;
console.log(child_node[17]);

// first child 
const First_child = main.firstChild;
console.log(First_child);

// last child 
let last_child=main.lastChild;
console.log(last_child);

// First element child 
let first_element_child = main.firstElementChild;
console.log(first_element_child);

// last elements child 
let last_element_child = main.lastElementChild;
console.log(last_element_child);
