


function fun(funksjon){
  if(typeof funksjon == "function"){
    funksjon();
  } else {
    console.log("Argumentet var ikke en funksjon");
  }
}

function helloWorld(){
  console.log("Hello World!");
}

fun(helloWorld);
fun("Hello World");
