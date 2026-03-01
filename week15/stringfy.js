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