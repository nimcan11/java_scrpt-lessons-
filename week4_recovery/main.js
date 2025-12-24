// replace string method 
const text = "i wanna to be professional proggrammer";
console.log(text.replace("proggrammer","full stack developer"))  //i wanna to be professional full stack developer
// replace all method 
const text2="i can speak somali because am somali";
console.log(text2.replaceAll("somali","British")) // i can speak British because am British
// splits it used to split string and then stored as array
const text3="habits are often no diffreneces until you cross crictical thresholds and you unlock new levels of performance";
console.log(text3.split())
// concat method 
const text5="Mr";
const text6="Proggrammer";
console.log(text5.concat((" "),text6));  //Mr Proggrammer

// chain methiod (parseFloat + toFixed examples)
const views = "20000.12 viewers";
const parsed = parseFloat(views);               // 20000.12 (number)

// conditions
let price = 12;
let descount = true;
let descount_am = 4;

if(descount == true){
    price = price - descount_am;
    console.log(`Total:$${price}`)
}


// elseif examples 
let waqtiga = 12;
if (waqtiga < 10) {
    console.log("subax wanaagsan");
} else if (waqtiga < 17) {
    console.log("duhur wanaagsan");
} else {
    console.log("Fiid wanaagsan");
}