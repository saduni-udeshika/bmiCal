//jshint esvertion:6
const express = require("express"); 
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/public/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / (height * height);
    res.send("Your BMI is: " + result);
});
app.listen(3000, function(){
    console.log("working");
});