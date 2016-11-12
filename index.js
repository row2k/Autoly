var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")



app.get("/", (req, res) => {
  var user = seedData.Users[0]
  res.render("index", {user: user})
})

app.get("/:id", (req, res) => {
  var customers = seedData.Users
  for (i = 0; i<customers.length; i++){
    if (req.params.id == customers[i].id){
      var name = customers[i].firstName
    }
  }
  res.render("user", {name: name})
})

//loop Users
//id match params id
//print info on page


app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
