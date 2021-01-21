var numbers  = [1,44,33,66,44,3,5,6];

function addNumbers(number1, number2){
  return number1 + number2;
}

function subtractNumbers(nuber1, number2){

}

function addNumbersFrom(arrayWithNumbers, funksjon){
  var result = arrayWithNumbers[0];
  if(typeof funksjon == "function"){
    for(var i = 1; i < arrayWithNumbers.length; ++i){
      result = funksjon(result, arrayWithNumbers[i]);
    }
  }
  return result;
}
