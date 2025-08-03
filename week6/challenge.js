let array =[12,16,88,90,300];

let num=array[0];
for(let i=0; i<array.length;i++){
    if(array[i] > num){
        num = array[i];
    }
}
console.log(`numberka ugu weyni waa ${num}`); // 300 
