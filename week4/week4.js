let laguage="waxaan ku hadlaa luuqadaha english iyo spanish";
console.log(laguage.replace("spanish", "Arabic")); // spanish change into Arabic 
console.log(laguage.replace("waxaan ku hadlaa luuqadaha english iyo spanish","waxaan bartaa luuqadaha englishka iyo carabiga")); // when you wanna to change all
// replace all , it has ability to change multiple values 
const prog="i can speak js in computer becouse js its a wonderfull language";
console.log(prog.replaceAll("js", "python"));
const Name="one of my freinds called mohomed and also their is another mohomed";
var name_change=Name.replaceAll("mohomed", "jama");
console.log(name_change);

// split 
const MyFav="i love rolls roys";
console.log(MyFav.split()); // stores in an array 
console.log(MyFav.split("")) // can be split word by word 
console.log(MyFav.split(" ")) // Array(4) [ "i", "love", "rolls", "roys" ]
const Email="abdin995@gmail.com";
console.log(Email.split("@")) // Array [ "abdin995", "gmail.com" ]

// Concat
Name1="Nimcan";
Name2="Abdi";
console.log(Name1.concat(" ",Name2)); // Nimcan Abdi
// repeat 
const star="*";
console.log(star.repeat(3)); // ***

// Chain methods , to use chain method by chainin two or more methods instead of use multiple variables 
 const MyYou="61514.516154 views"; // i wanna to display only  61514.516.
 console.log(parseFloat(MyYou).toFixed(3)); // 61514.516 
 // chaining string methods 
 f_name="my fathers  name is Abdi";
 console.log(f_name.substring(19).toUpperCase());   


 // conditions 
 let price=200;
 let discount=true;
 let discount_price=20;
 if(discount==true){
    price=price - discount_price;
    console.log(`Total:${price}$`);
 } // output: 180 becouse its true 

var Magac = "Nimcaan";
if (Magac.length <= 5) {
    console.log(`magaca ${Magac} wuu gaaban yahey`);
} else {
    console.log(`magaca ${Magac} wuu dheer yahey`);
} // magaca nimcaan wuu dheer yahey

//  else if 
let price1=200;
let discount1=false;
let d_price=30;
if(discount1==true){
    price1=price1 - d_price;
} else if(price1 >100){
    price1=price1 - d_price; 
}
 console.log(`Total:${price1}$`)

 // example two if person settle in somaliland and have discount must be substract 
 let price2=300;
 let country="USA";
 let discount2=false;
 let country_price2=10;
 if(country=="Somaliland"){
     price2=price2 - country_price2;
 } else if(discount2==true){
    price2=price2 - country_price2;
 } else if(price2 > 200){
    price2=price2-country_price2;
 }
 console.log(`muwaadin qiimahagu waa ${price2}Shilling`);

 // else statement 
 let price3 = 100;
let country3 = "USA";
let discount3 = false;
let country_price3 = 10;

if (country3 == "Somaliland") {
    price3 = price3 - country_price3;
} else if (discount3 == true) {
    price3 = price3 - country_price3;
} else if (price3 > 200) {
    price3 = price3 - country_price3;
    console.log(`muwaadin qiimahagu waa ${price3}Shilling`);
} else{
    console.log("Adu waxba ma heysatid miskiin");
}
// nested if statement 
let Total_price = 700;
let Discount_price = 20;
let empl_dis = 30;
let Discount = true;
let Employee = true;
if(Discount===true){
if(Employee===true){
  Total_price= Total_price -empl_dis;   
} else{
  Total_price= Total_price - Discount_price;
}
  
    console.log(`Total:${Total_price}$`)
}else{
    console.log("you dont have any discount!");
}
// example 2 
let marks=12;
if(marks>=50){
    console.log("wad gudubtey");
    if(marks>=80){
        console.log("waxaad heshey darajda A")
    }else if(marks >=60){
        console.log("waxaad heshey darajada B ")
    } else{
        console.log("waxaad heshey darjada C")
    }
}else{
    console.log("waad dhacdey");
}

/// short hand conditions  , conditional ternary operator 
let MyName="Nimcaan";
Result=MyName.length > 5? "waa mid yar" :"waa mid weyn";
console.log(Result);
// example two age checker 
const Age=12;
check= Age>=15? "you're Adult":"You're not mature";
console.log(check);
// if you wanna multiple conditions 
const age=17;
const freshman= false;
short=age > 18?"soo dhawoow waa laguu baahanyhy": freshman===true? "soo dhawwoow waxaad ardey": age>45? "waad weyntahey laguuma baahna fadalan": "waan ka xunahey laguma aqoonsan";
console.log(short);


// switch statements 
const days=8;
switch(days){
    case 1:
    console.log("sabti");
    break;
    case 2:
        console.log("axad");
        case 3:
            console.log("isniin")
            break;
            case 4 :
                console.log("slaalsa");
                break;
                     case 5 :
                console.log("arabaca");
                break;
                     case 6 :
                console.log("khamiis");
                break;
                     case 7 :
                console.log("jimce");
                break;
                default:
                    console.log("maaha maalin la aqoonsanahey");
            
            
            
            
}














