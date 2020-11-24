var navn1 = "Geir";
var navn2 = "Jakob";
var navn3 = "Jakob";

switchItup();
function switchItup(){

  switch (navn1) {
    case navn2:
      console.log(navn1 + " er det samme som " + navn2);
    case navn3:
      console.log(navn2 + " er det samme som " + navn3);
  }
  switch(navn2) {
    case navn3:
      console.log(navn2 +" er det samme som " + navn3);
  }
}
