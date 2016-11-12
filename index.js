var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")



app.get("/", (req, res) => {
  var user = seedData.Users[0]
  // seedData.seed();
  res.render("index", {user: user})
})


app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
