var express = require("express");
var app = express();

function func_test(name){
    return name
}
app.get("/", (req, res,next) => {
   res.send('Hello') 
});
app.get("/url", (req, res, next) => {
    res.json(["Id", "Username", "Age"])
   });

const server = app.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports = {func_test, server}
