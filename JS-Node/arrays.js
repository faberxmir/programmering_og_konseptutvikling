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
printList(arrNavneListe);
