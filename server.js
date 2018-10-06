var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!'); 
});
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });

