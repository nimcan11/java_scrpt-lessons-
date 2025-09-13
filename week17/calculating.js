// calculating 
const starttime = Date.now();
for(i=0;i<1000;i++){
    console.log(i+1);
}
const endtime = Date.now();
console.log(`hawshan waxaa lagu fuliyey ${endtime - starttime }ms`);
console.log(`hawshan waxaa lagu fuliyey ${endtime - starttime / 1000} s`);