const user = require("./user");

console.log(user.helloUser());

user.name = "NewBorn";

console.log(user.helloUser());
