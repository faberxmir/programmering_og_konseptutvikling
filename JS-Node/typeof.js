function printArray(array){
  console.log("------Printing Array-----------");
  if(Array.isArray(array)){
    for(var i = 0; i < array.length; ++i){
      console.log(array[i]);
    }
  }
}


//oppgave 4
function sortering(arr, isAscending){

  if(typeof isAscending === 'boolean'){

    if(Array.isArray(arr)){
      if(isAscending === true){
        console.log("Sorting array in ascending order, current state is:");
        printArray(arr, true);

        for(var i = 0; i < arr.length; ++i){
  		      for(var tall = 0; tall < arr.length; ++tall){
  			         if(arr[tall] > arr[tall + 1]){
  				         var tempElementStorage = arr[tall];
  				         arr[tall] = arr[tall + 1];
  				         arr[tall + 1] = tempElementStorage;
  			         }
  		       }
  	     }
      }else if(isAscending === false){
        console.log("Sorting array in descending order, current state is: ");
        for(var i = (arr.length - 1); i >= 0; --i){
          for(var tall = (arr.length - i); tall > 0; --tall){
            if(arr[tall] < arr[tall - 1]){
              var tempElementStorage = arr[tall];
              arr[tall] = arr[tall - 1];
              arr[tall - 1] = tempElementStorage;
           }
          }
        }
      }
    }else{
      console.log("dette er ikke en array")
    }
  }
}

var array1 = [9,12,5,8,0,43,23,54];
var array2 = [7,6,5,8,3,7,9];
printArray(array2);
sortering(array2, false);
printArray(array2);
