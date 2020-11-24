//const readLine = require('readLine');
console.log("program starter")
var names = ["ola", "per", "espen", "Karl"];
var names2 = ["a","b", "c","d","e"];

function kanga(navneliste){
  console.log("Printer navneliste: ");
  var i = 0;
  while (i < 4) {
    console.log(navneliste[i]);
    ++i;
  }
}

kanga(names);
kanga(names2);
kanga(["h", "i"]);
