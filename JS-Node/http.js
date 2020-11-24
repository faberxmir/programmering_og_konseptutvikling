const http = require("http");

http.createServer((req, res)=>{
  console.log("Server is created!");
  res.end();
}).listen(5000);
