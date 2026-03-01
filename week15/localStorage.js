// how local storage works
// local storage can be stored two ways 
// 1. string way 2. json way
// first at all you have store a key and values 
localStorage.setItem("Username","Nimcan")
// setting storage as array 
localStorage.setItem("Names",["Nimcaan","Fatima","Raxma"])

// getting item \
// use get item to use values you store your local storage 
const User = localStorage.getItem("Username");
console.log(User);

// Use remove item to remove key and values you store it 
localStorage.removeItem("Names")

// Use clear all your data 
// localStorage.clear()

// sessin storage 
sessionStorage.setItem("Status","single");
const status1 = sessionStorage.getItem("Status");
console.log(status1);