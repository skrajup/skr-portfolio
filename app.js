const express = require("express");
const ejs = require("ejs");
const app = new express();

app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {});
});

app.get("/about", function(req, res){
    res.render("about", {});
})


app.listen(3000);