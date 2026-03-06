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
const [{name,stability,country_loc}]=countries;
console.log(name);
console.log(country_loc);
console.log(stability);

// if i wanna to display all others 
countries.forEach(({name,stability,country_loc})=>{
console.log(name);
console.log(stability);
console.log(country_loc);
console.log("---")
})

// data destruction example three 
const clothes = [
  {Name:"Surwaal",Type:"dharhooose",Midab:"Madaw"},
    {Name:"shaadh",Type:"dharsare",Midab:"cadaan"},
      {Name:"Shoort",Type:"dharhooose",Midab:"None"},
        {Name:"cumaamad",Type:"sharsare",Midab:"Madaw"},
          {Name:"suuun",Type:"dhardhexe",Midab:"Madaw"},
];

// data destruction 
const [{Name,Type,Midab}]=clothes;
clothes.forEach(({Name,Type,Midab})=>{
  console.log(Name);
  console.log(Type);
  console.log(Midab);
  console.log("**".repeat(4))
})
