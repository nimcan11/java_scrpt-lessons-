// Tusaale: Chain String Methods
const text = "   JavaScript is fun!   ";
const result=text.replace("fun","is powerfull").trim().toUpperCase();
console.log(result); // "JAVASCRIPT IS POWERFUL!"

// Exercise 13
let Tempreture=12;
if(Tempreture <=30 && Tempreture >= 25){
    console.log(`maanta heer-kulku wuxuu maraya ${Tempreture}°C, si awgeed waa kuleyl!!`);
}
if(Tempreture <=25 && Tempreture >= 20){
    console.log(`maanta heer-kulku wuxuu maraya ${Tempreture}°C, si awgeed waa dhexdhexaad`);
}
if(Tempreture < 20){
    console.log(`maanta heer-kulku wuxuu maraya ${Tempreture}°C, waa qaboww!!`);
}
// Exercsise 14
let Tempreture2=28;
let Result=Tempreture2 <=30 && Tempreture2 >=25? "maanta waa kuleyl":Tempreture2 <=25 && Tempreture2 >=20? "maanta waa Dhexdhexaad":Tempreture2 <20?"maanta waa qaboww!!":"qiyaasta lama garan karo ";
 console.log(Result); 
 
 // Exercise 15
 // using switch statemt
 let Jop="Students";
 let mushahar=450;
 switch(Jop){
    case "Developer":
        console.log(`Soo dhawoow waxaad tahey ${Jop},mushaharkaagu waa $${mushahar +100}`);
        break;
        case "Graphic designer":
            console.log(`so shawoow waxaad ${Jop}, mushaharkaagu waa $${mushahar + 200}`)
            break;
            case "Casheir":
                console.log(`so dhawooow waxaad tahey ${Jop}, mushaharkaagu waa $${mushahar + 300}`);
                break;
                case "Student":
                    console.log(`so dhawoow waxaad tahey ${Jop}, mushaharkaagu waa $${mushahar + 250}`);
                    break;
                    default:
                        console.log("adigu shaqaale ma tahid waad so qaldantey"); 

 }
 






