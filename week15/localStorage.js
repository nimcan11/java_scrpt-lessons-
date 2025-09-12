// local storage using set item 
localStorage.setItem("company_owner","Axmed");
localStorage.setItem("Username","Nimcaan");
localStorage.setItem("Mode","Light");
localStorage.setItem("location","Hargeisa ");
localStorage.setItem("Number",+252633467231);

localStorage.removeItem("company_owner");
localStorage.removeItem("company_owner");
localStorage.removeItem("Number")
localStorage.removeItem("company owner");
localStorage.removeItem("company owner");

// accessing local storage using getItem 
const User = localStorage.getItem("Username") // Nimcaan 
console.log(User);

const owner = localStorage.getItem("company_owner");
console.log(owner); // Axmed 
const User_number = localStorage.getItem("Number");
console.log(User_number);

// removing data using removeitem 


// session storage  and seeting using set item s
sessionStorage.setItem("Name","Nimcaan Cabdi Muxumed");
sessionStorage.setItem("Education-level","Post graduate student")
sessionStorage.setItem("Phone",3467231);
sessionStorage.setItem("Ismaried" ,false);

// getting using get item 
let Name = sessionStorage.getItem("Name"); // nimcan,,,,,
let edu=sessionStorage.getItem("Education-level");

console.log(Name);
console.log(edu);

// removing 
sessionStorage.removeItem("Name");