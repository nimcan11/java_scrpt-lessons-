let btn = document.querySelector("button");
let audio = document.querySelector("audio");
let btn2=document.querySelector("button.pouse");

// setting properties 
audio.addEventListener("timeupdate",()=>{
   const AudoTime = audio.currentTime;
   if(AudoTime > 10){
    // audio.currentTime = 0;
    // audio.playbackRate = 2 ; // 2x 
    audio.volume = 0;

   }

})