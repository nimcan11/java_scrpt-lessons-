// Format 
const date = new Date;
let format=date.toLocaleDateString("en-CA",{
    month:"2-digit",
    day:"numeric",
    weekday:"long",
    year:"numeric",
    hour:"2-digit"
    
})
console.log(format); // china 

// another way easy format 
let format3=date.toLocaleDateString("en-US",{
    dateStyle:"full"
});
console.log(format3);

