

function sortArray(arr){
  if(Array.isArray(arr) && arr.length > 1){
    let temp;
    for(var i = 0; i < arr.length; ++i){

      for(var y = i+1; y < arr.length; ++y){
        if(arr[i] > arr[y]){
          temp = arr[y];
          arr[y] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }
}

var arrey = [45,34,1,4,9];
var arrey2 = [32,76,89,0];

sortArray(arrey);
console.log(arrey);
sortArray(arrey2);
console.log(arrey2);

function fun(func, arr){
  for(var i = 0; i < 0; i++){
    if(typeof func = "function"){
      func(arr[i]);
    }
  }
}
