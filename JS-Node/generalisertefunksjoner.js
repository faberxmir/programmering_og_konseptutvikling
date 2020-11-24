


function sortArray(array1){
  if(Array.isArray(array1)){

    for(var i = 0; i < array1.length; ++i){
      //console.log("Loop1: runde: " + i);
      //console.log("--------------------------");
        for(var x = 0; x < array1.length; ++x){
          var temp = array1[i];
          if(temp > array[x]){
            array[i] = array[x];
            array[x] = temp;
          }
          //console.log("loop2: runde: " + x);
        }
        //console.log("--------------------------");
    }
  }
}
sortArray([1,2,3]);
