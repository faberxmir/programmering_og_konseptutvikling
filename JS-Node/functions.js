//Bruke funksjoner i variabler
var funksjonVariabel = (param1, param2) => { console.log(param2 + "Hello World!" + param1)};

funksjonVariabel("-X-", "-X-");

function fun(param1, param2){
  console.log(param2 + "Hello World!" + param1)
}

fun("-X-", "-X-");

var array = [2,3,4,6,3,56,3];

function fun2(enFunksjon, enArray){
  if(typeof enFunksjon==="function"){
    if(Array.isArray(enArray)){
      var resultat = enArray[0];
      for(var i = 1; i < enArray.length; ++i){
        if(i < array.length-1){
          resultat = enFunksjon(resultat, array[i]);
        }
      }
    }
  }
  return resultat;
}

[1,1,1,2]
