

// stringfy is a method used to convert array object  into  string
const clubs={
    premierleugu:"Barca",
    Leliga:"Liverpool"
}
console.log(clubs);
console.log(typeof clubs);
// now its an object 
const clubstostring = JSON.stringify(clubs);
console.log(clubstostring);
console.log(typeof clubstostring)

// Json.parse to convertstring into an object 
const clubstoparse = JSON.parse(clubstostring);
console.log(clubstoparse);
console.log(typeof clubstoparse);

const cars = [
  { make: "Toyota", model: "Corolla", year: 2022 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Ford", model: "Mustang", year: 1969 }
];
const cars_to_string = JSON.stringify(cars);
console.log(typeof cars_to_string);

// arra of object example two 
const mobiles=[
    {company:"Apple",Type:"Iphone",origin:"China"},
      {company:"Samzung",Type:"tablet",origin:"Japan"},
        {company:"Xiaomi",Type:"Iphone",origin:"China"},
          {company:"Apple",Type:"Iphone",origin:"China"}
    
];
let mobiles_to_string = JSON.stringify(mobiles);
console.log(typeof mobiles_to_string); // string 

// setting local storage 
