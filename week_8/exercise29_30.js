// exercise 29 loop numbers using function skip count 
console.log("** exercise 2**".repeat(6))
const Mynumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let SkipCount = 7;
let loopNumbers=() =>{
    for( let i=0;i<Mynumbers.length;i+=SkipCount + 1 ){
        console.log(`you skip ${SkipCount}:numbers so the output would be ${Mynumbers[i]}`)
    }
}
loopNumbers();

 // exercise 30 
 // calculator example 
let calculate=(calaamad,n1,n2) =>{
let result=0;
switch(calaamad){
    case "+":
        result = n1 + n2;
        break;
        case "-":
            result=n1-n2;
            break;
            case "*":
                result=n1 * n2;
                break;
                case "/" :
                    result = n1 !==0 ? n1 / n2 :"zero is not divisible";
                    break;
                    default:
                       return `You used wrong sign "${calaamad}", it is not defined!!!`;

}
return result;
}
console.log(calculate("+",2,2)) /// output:4 
console.log(calculate("-",200,2)) /// output:198
console.log(calculate("*",20,2)) /// output:40
console.log(calculate("/",20,2)) /// output:10
console.log(calculate("$",4,5)) // You used wrong sign "$", it is not defined!!!




