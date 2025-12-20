// object 
const information = {
    name:"Nimcaan cabdi",
    Age:21,
    country:"somaliland"
}
console.log( typeof information); // as object 


// converting object into json 
const info_json = JSON.stringify(information);
console.log( typeof info_json);

// converting json into an object 
const info_js=JSON.parse(info_json);
console.log(typeof info_js);
