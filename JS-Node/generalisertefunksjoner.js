
function printArray(array1){
  array1.forEach((item, i) => {
    console.log(item);
  });


}


function sortArray(array1){
  if(Array.isArray(array1)){

    for(var i = 0; i < array1.length; ++i){
      //console.log("Loop1: runde: " + i);
      //console.log("--------------------------");
        for(var x = 0; x < array1.length; ++x){
          var temp = array1[i];
          if(temp > array1[x]){
            array1[i] = array1[x];
            array1[x] = temp;
          }
          //console.log("loop2: runde: " + x);
        }
        //console.log("--------------------------");
    }
  }
}
var array = [4,4,6,8,6,5]
sortArray(array);
printArray(array);
