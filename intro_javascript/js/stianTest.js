var hobbitenDverger =["Thorin","Dwalin", "Balin","Fili", "Kili", "Dori", "Nori", "Ori", "Óin", "Glóin", "Bifur", "Bofur", "Bombur"];

//Oppgave 5: eksempel Geir
function geirEksempel(arrayParam){
  console.log("------------Eksempel-----------------");
  var teller = 0;
  var maxCount = arrayParam.length;

  while(teller < maxCount){
    console.log(arrayParam[teller]);
    teller++;
  }
  console.log("------------Eksempel-----------------");
}

geirEksempel(hobbitenDverger);
