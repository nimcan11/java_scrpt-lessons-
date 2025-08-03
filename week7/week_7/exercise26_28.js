// exercise one : waa function so muujinaya age iyo magaca inagoo isticmaleyna parameters 
function muuji(magaca="magacaaga lama aqoonsan",dada=0){
    console.log(`magacaagu waa:${magaca},da'daaduna waa:${dada}. waad ku mahadsantahey booqashadada`);
}
muuji("maxamed",22);
muuji();

// exercise two: waa fuction qaadanaya hal parameter kedibna tirinaya magaca loo dhiibo ereyada ku jira ..
function tiri_eryada(name="magaca maad gelin"){
    magaca_tiri=name.length;
    console.log(`magacaagu waa ${name}, xarfaha ku jiraana waa:${magaca_tiri}.;`)
}
tiri_eryada("nimcaan");
// exercise 3 : waa function tirinya inta kalmadood ee ku jira senetence ka ..
function tiri_kalmado(kalmad="wax kalmada maad gelin!!!"){
    let  kalmado_tiriye= kalmad.split(" ").length;
    console.log(`Qoraalkani waa ${kalmado_tiriye}.`)
}
tiri_kalmado("magaceygu waa nimcaan abdi");
