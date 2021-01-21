
function addNumbers(a, b){
  return a + b;
}

function functionOnArray(numberArray, fun){
  let result = null;

  if(typeof(fun) === "function"){
    if(numberArray.length > 0){
      result = numberArray[0];
      for(let i = 1; i < numberArray.length; ++i){
        result = fun(result, numberArray[i]);
      }
    }
  }
  return result;
}

let etTall = functionOnArray([8], addNumbers);

console.log("Svaret er: " + etTall);

etTall = functionOnArray([4,2,2,2], (a, b) =>  a/b );

console.log("Svaret er: " + etTall);
