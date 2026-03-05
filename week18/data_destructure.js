// data destructure is way that break down arrays and objects to grab easily 
const books = {
    self_developed:"Atomic habitat",
    Motivation:"7 habits of succesful people",
    Money:"Rich dad poor dad"
};

// data destruction 
const {self_developed,Motivation,Money}=books;
// console.log(self_developed);

// arrays 

const person = ["Nimcan","Fatima","Mahdiya","Bushra"];
const [husband,first_wife,second_wife,third_wife]= person;
// console.log(first_wife);



// data desttruction example two 
// objects 


// data destruction 
const countries = [
  {
    name: "Somaliland",
    country_loc: "Horn of Africa",
    stability: true
  },
  {
    name: "Kenya",
    country_loc: "East Africa",
    stability: true
  },
  {
    name: "Somalia",
    country_loc: "Horn of Africa",
    stability: false
  },
  {
    name: "Ethiopia",
    country_loc: "Horn of Africa",
    stability: true
  }
];

// data destruction 
const [{name,stability,country_loc}]=countries[2];
console.log(name);
console.log(country_loc);
console.log(stability);