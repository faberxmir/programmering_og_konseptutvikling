function printArray(array){
  console.log("---------------------");
  if(Array.isArray(array)){
    for(var i = 0; i < array.length; ++i){
      console.log(array[i]);
    }
  }
  console.log("----------------------");
}

function sortArrayAsc(array){
  if(Array.isArray(array)){
    const arrLength = array.length;

    if(arrLength > 1){//if the array is of length one, then it is already sorted..
      var tempStore;
        const accessModifier = 1; //used to modify array access so no item is compared to itself
      for(var i = 0; i < arrLength; ++i){
        for(var y = i + accessModifier; y < arrLength; ++y){ //y = i + 1 because if y == i then, i will be compared to itself

          if(array[i] > array[y]){
            tempStore = array[i];
            array[i] = array[y];
            array[y] = tempStore;
          }

        }
      }
    }
  }
}

var array1 = [3,2,4,7,2,1]; //even numbers
var array2 = [1,9,8,7,0,5,4]; //prime numbers

sortArrayAsc(array1);
sortArrayAsc(array2);
printArray(array1);
printArray(array2);

function fun(input){
  console.log("Input før endring, inne i scope: " + input);
  input =" goodbye cruel world!";
  console.log("Input etter endring inne i scope: " + input)
}

var test = "Her";
console.log("Input før endring, utenfor scope: " + test);
fun(test);

console.log("Input før endring, utenfor scope: " + test);
