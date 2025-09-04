// getting elements
let inputs = document.querySelectorAll("input")
inputs[0].focus()

// loop the inputs using for each 
inputs.forEach((input,index)=>{
    let myindex = 0;
    input.addEventListener("input",()=>{
       if(input.value.length === 1 ){
        // add  the blur 
       input.blur();     
     let go =  myindex = index + 1;
    // so when he found index that has go varaibale got that index  and make it focus
//   myindex <= 3 ? inputs[go].focus():"";
  myindex <= 3 && inputs[go].focus();  // you can use thisbecouse there is not another face 
       }else if(input.value.length === 0){
          input.blur();     
     let go =  myindex = index - 1;
    // so when he found index that has go varaibale got that index  and make it focus
//   myindex <= 3 ? inputs[go].focus():"";
  myindex >=0 && inputs[go].focus();  // you can use thisbecouse there is not another face 
       }
    })
})