var arrNavneListe = ["Hansel", "Grethel", "Franz", "Heinz", "Zuma", "Fina"];

function printList(txtListe){
  var i = 0;
  if(Array.isArray(txtListe)){
      var max = txtListe.length
      var index = 0;
      //commentar
      console.log("print arrNavneListe: \n");

      while(index < max){
          console.log(arrNavneListe[index]);
          ++index;
      }



  }
}
//printList(arrNavneListe);

var numb1 = [9,12,5,8,0,43,23,54]
var numb2 = [1,6,8,4,6,4,7,9,3,4,2,99]



//1 sjekk index i array, mot alle andre indexer
//2 hvis en index er lavere enn indexen som blir sjekket, bytt plass
//3 gå til neste index og gjenta 1 og 2

function sort(array) {
  var temp;
  for (var i = 0; array.length > i; i++) {
    for (var y = i; y < array.length; y++) {
      if (array[i] > array[y]) {
        temp = array[i];
        array[i] = array[y];
        array[y] = temp;
      }
    }
  }
}

sort(numb2);
console.log(numb2);
