console.log("hello world");

var counter = 0;

while(counter < 20) {
  console.log(counter);
  counter = counter+1;
}


var isRunning = true;
counter = 0;
while(isRunning){
  console.log(counter);
  counter += 1;
  if(counter >= 200000){
    isRunning=false;
  }
}
