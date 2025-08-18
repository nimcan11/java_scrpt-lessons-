const UserName="Nimcaan";
console.log(`soo dhawooow mudana ${UserName}`)
// look like concantination
const m1="my";
const m2="name";
const m3="is";
const m4="Nimacaan";
console.log(`${m1} ${m2} ${m3} ${m4}`)
const Text=`magaceygu waa nimcaan cabdi muxumed waxaan ahey software developer.
da'deydu waa 20 sano waxaan rajeynyaa mustqabal wanaagsan.
waxaan jecelahey waqtiyadeyda firaaqada inana daawdau filiminta.
hadda waxana daawada film la yidhaa prison break`;
console.log(Text);

// lesson two in week 3 
// type of is an opretor used for to ensure datatype of a varaible 
const age=20;
const price=34.2;
const Name='Nimcaan Abdi Mohomed';
const fav_games=["chess", "football", "swimming"];
const status={
    isMarried:false,
    color:"brown skin"
};
const Sibblings=undefined;
const smoking=null;
// we have ensure datatype of these varibales
console.log(typeof age);
console.log(typeof price);
console.log(typeof fav_games);
console.log(typeof Name);
console.log(typeof status);
console.log(typeof Sibblings);
console.log(typeof smoking);// historical bugg
console.log(Array.isArray(fav_games)); // is used to ensure array , true 
console.log(Array.isArray(status));// is an object so output would be false

// lesson three methods in week 3 
const Mynum=1234;
console.log(typeof Mynum);
console.log(Mynum.toString());
console.log(typeof Mynum.toString());
 // method two to fix 
 const Wight=45.917165441771442;
 console.log(Wight.toFixed(1));// only round to neasrt ten 
  // parse integer 
  const str="1234.2";
  const int=parseInt(str);
  console.log(str);
  console.log(int); // but its not display the decimal point but you use parseflout
  console.log(typeof str);
  console.log(typeof int); // number 
  // method 4 parse to flout 
  const To_num="23.67";
  const To_num2=parseFloat(To_num);
  console.log(To_num);
  console.log(To_num2);
  // example of number method 
  const Tiro="123";
  const num1=Number(Tiro);
  console.log(num1);

  // parse integer has ability to exrtact number in content 
  const like="51413 likes";
  const like2=parseInt(like);
  console.log(like2); // extract only integer 
  // but if the number in the content at ceneter the would be NAN not a number
  const likes="this video has 3000000 like";
  const likes2=parseInt(likes);
  console.log(likes2);

  // number method 
  const str1="1234";
  const str3= Number(str1);
  console.log(str3); // but if you but inside the number() the output would be NAN.
   // Method 5 to ensure number or not isNaN.
   const tiro=123;
   console.log(isNaN(tiro));
   const magac="nimcaan";
   console.log(isNaN(magac));

   // lesson 5 in week3 , math methods 
   // round method 
   console.log(Math.round(8.7)); //9
   console.log(Math.round(3.3)); //3
   // floor its and aobject math 
   console.log(Math.floor(9.7)); // 9
   console.log(Math.floor(4.5)); //4
    // cell round up  anyime  
    console.log(Math.ceil(3.3)); //8 
    console.log(Math.ceil(7.7)); // 8

    // lesson six week 3 
    // continue to math methods 
    // Trunc completely removes point of the decimal 
    const Height=81.34;
    console.log(Math.trunc(Height));
    // power method makes or work like an exponent **
    console.log(Math.pow(10, 2)); //100
     console.log(Math.pow(8, 7)); // mooyan 

     // min method displays only the smallest number 
     console.log(Math.min(124,626,23,9,45)); // is the smallest 
     // Max calculates or displays the largest number 
          console.log(Math.max(124,626,23,9,45));
          // Random display a numbers randomly 
          console.log(Math.random()); // chooses a number a number  randomely 


          //lesso 7 string methods 
          const Magac="Nimcaan";
          console.log(Magac[3]);//c
          console.log(Magac[4]);//a
          console.log(Magac[10]);//undefiined 


            // chart at , it can replace square brackets 
            const Magac2="Nimcaan";
            console.log(Magac2.charAt(3))//c
            // length used to recognize the length of the string 
            const Magac3="Nimcaan";
            console.log(Magac3.length);
            // to upper case 
           console.log(Magac3.toUpperCase()); //upper case 
           // to lower case 
           console.log(Magac3.toLowerCase()); //lower case 
           // parte three 
           // include searching or finding the input text 
           const Text_find="nimcaan waa sofware developer student";
           console.log(Text_find.includes("developer")); // true 
           // index of 
           console.log(Text_find.indexOf("d"));
           // last index of 
           console.log(Text_find.lastIndexOf("t"));
           // start with 
           console.log(Text_find.startsWith("n"));  // true 
           // end with ensures if the text end with your input 
           console.log(Text_find.endsWith("t"))// true 

           // parte three in string methods 
           // slice - to extract specific text in variabke 
         
           // sub_string can a like of slice but don't take negative numbers 
           console.log(fruits.substring(7,12)); // Mango 
           /// sub str you can specify the lengeth 
           console.log(fruits.substr(0, 5)); // but its outdated 
           // trimp removes the space both back and front 
           let Car="     mercedes   ";
           console.log(Car.trim()); // removes white space .








