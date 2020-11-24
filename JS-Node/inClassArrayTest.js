var liste = ["Benjamin", "Szymon", "Per Emil"];
var tall = 1;
var tekst ="Tekst";
/*
console.log(typeof(liste));
console.log(typeof(tall));
console.log(typeof(tekst));

if(Array.isArray(liste)){
  console.log("Liste er en liste");
  console.log("Lista har " + liste.length + " elementer");
} else {
  console.log("HVa som enn kom inn i testen min er ikke en liste");
}*/

function fu(geir, per, espen){
  console.log(geir);
  if(typeof(per) !=="undefined"){
    console.log(per);
  } else {
    console.log("type of per is: " + typeof(per) );
  }
}
fu("Geir");
fu("Geir", "Per");
//fu("Geir", 2, 3);
