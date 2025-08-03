// switch statement using multiple cases 
let days=3;
switch(days){
    case 1 :
    case 2 :
    case 3 :
    case 4 :
          case 5 :
            console.log(`maanta waa ${days}, waana maalin shaqo`);
            break;
            case 6:
                  case 7 :
                    console.log(`maanta waa ${days}, waaana fasaxa`)
                    default:
                        console(`${days}, maalintan lama aqoonsan`)

        
        
}

/// array 
const Students=["Nimcaan", "maxamed", "khaalid", "Zuldaan"];
console.log(Students);
// array stored in a integer or number
const Age=[16,66,18,28,98];
console.log(Age);
// array stored combinatation of string and Numbers and also empped to anothre array
const combine=["Najma", "Khadra","ibaado",1,2,3,4,5,["Nimcaan","Mohomed"]];
console.log(combine);
/// accessing array 
console.log(Students[3]);
// to access the embedded array
console.log(combine[8][0]) //Nimcaan

// updating the array
Students[0]= "Amiin";
console.log(Students); // replace where nimcan to Amiin
// what happen if store un defined variable 
Students[4]='naasir';
console.log(Students); // adding at the if we add last becouse its closest number
Students[9]='jaamaca';
console.log(Students);// empty value becouse not defined and also add your lengeth

// array methods
// to recongnize the length of an array 
const Arday=["Nimcaan", "Muuse", "Khaalid","Sahra"];
Arday[Arday.length] = "Casiisa";
Arday[Arday.length]= "farah";
Arday[Arday.length]= "muuse";
console.log(Arday.length);
console.log(Arday);

// part2  concat mehtod 
const previews=["lacaseDababel", "Mpneyheist", "Game of thrones"];
const New=["peison_break", "breakin bad "];
const all=previews.concat(New);
console.log(all);
// Join seperator 
const Cars=["lamboghini", "Mercedes","ferari","Bmw","rols roys","toyota"];
const MotorCyles=["ducati", "suzuki","Harleydavid son"];
console.log(Cars.join()) // it makes string lamboghini,Mercedes,ferari,Bmw,rols roys,toyota
console.log(MotorCyles.join("@"))// uses att seperator 
// push method 
Cars.push("hyundai"); /// adding last of an array 
console.log(Cars);
// un shift 
Cars.unshift("Nissan","Ford"); // adding at the beggining of the senetence
console.log(Cars);
/// shift method removes the fist value of an aaray
console.log(Cars.shift()); // display the one whose drob it , Nissan.
console.log(Cars);
console.log(Cars.shift()); // display the one whose drob it , Ford.
console.log(Cars);
//pop removes last element of ur array
const colors=["blue", "white", "purple","Green"];
console.log(colors)
colors.pop();
console.log(colors) // removes green
console.log(colors.pop()); // display the one who removes 
console.log(colors) // removes purple

// index off is used to recognise the index of ab element 
let my_sisters=["ayaan", "raxma", "ayaan","suleekha","hoodo", "samsam","raxma"];
let check= my_sisters === -1? "aradayaa kuumaan heley":`arayadaan waan hele numberkeeduna waa ${my_sisters.indexOf("hoodo")+1}`; // we use index of 
console.log(check);
// last indexof method checks two times and then give index of last one 
console.log(my_sisters.indexOf("ayaan")); //0
console.log(my_sisters.lastIndexOf("ayaan"));//2









