
// step one  getattribute cards 

const card=document.querySelector(".card");
// console.log(card); // to verify 
const btn=document.querySelector("button");
// console.log(btn); // to verfy 

// step two get the class inside the card 

// console.log(card_mode);
// step three make function that changes dark and light 
btn.onclick = function change_mode(){
    const card_mode= card.className;
    if(card_mode === "card light"){
       card.setAttribute("class","card dark")
    }else if(card_mode === "card dark"){
     card.setAttribute("class","card light")
    }
}



