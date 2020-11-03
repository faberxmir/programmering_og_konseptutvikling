var currentTime = 0;
var timeMark;
var timePassed = 0;
var timeToCheck = 0;

function helloWorld(){
  document.getElementById("heading").innerHTML = "Hello World!";
}

function goodbyeWorld(){

  document.getElementById("heading").innerHTML = "Goodbye World!";
}

function findTime(){
  var d = new Date();
  var time = d.getTime();
  return time;
}

function initTime(){
  timeMark = findTime();
}

function setTime(){
  document.getElementById("timeDisplay").innerHTML = "Time spent on page " + timePassed + "s";
}

function changeTime(){
    currentTime = findTime();
    timeToCheck = currentTime - timeMark;
    timeToCheck /=1000;
    if(timeToCheck >= 1){
        console.log("timePassed" + timePassed);
      timePassed+=timeToCheck;
      timePassed = Math.trunc(timePassed);
      setTime();
      timeMark = currentTime;
    }
}

function loop(){
  while(timePassed < 10){
    changeTime();
  }
}
