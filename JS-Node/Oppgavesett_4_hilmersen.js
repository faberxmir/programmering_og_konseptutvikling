//Geir Hilmersen
//10 November 2020

//ArrayEksempel
function swapArrayElements(){
  var arr = ["Geir", "Espen", "Ellen", "Erik", "Tor Einar", "Trygve", "Sigurd", "Sverre"];

  var arrIndex = 0;
  var arrLength = arr.length;
  var arrLastIndex = arrLength -1;

  while(arrIndex < arrLength){
    arr[arrIndex] = arr[arrLastIndex];
    arrIndex++;
  }
}

//Oppgave 6
function reverseArray(array){
  if(Array.isArray(array)){
    var numberOfArrayElements = array.length;
    var currentArrayIndex = 0;
    var lastIndexOfArray = numberOfArrayElements - 1;
    var tempElementStorage;
    var halfNumberOfArrayElements = numberOfArrayElements/2;

    while(currentArrayIndex < halfNumberOfArrayElements){
      tempElementStorage = array[currentArrayIndex];
      array[currentArrayIndex] = array[lastIndexOfArray-currentArrayIndex];
      array[lastIndexOfArray-currentArrayIndex] = tempElementStorage;

      currentArrayIndex++;
    }
  }
}
var listeMedNavn = ["Geir", "Espen", "Ellen", "Erik", "Tor Einar", "Trygve", "Sigurd", "Sverre", "Sigrid"];

printArray(listeMedNavn);
reverseArray(listeMedNavn);
printArray(listeMedNavn);
function printArray(array){
  if(Array.isArray(array)){
    var arrayLength = array.length;
    var index = 0;
    while(index < arrayLength){
      console.log(array[index]);
      ++index;
    }
    console.log("------------------------------");
  }
}
console.log("5/2 = " + 13/3);

//-------------------------------------------------------------
var geir er kul= true;

function kewl(){
  if (geir er kul === true){
   console.log("geir er kul");
  }
}
