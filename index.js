var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")



app.get("/", (req, res) => {
  var user = seedData.Users[0]
  res.render("index", {user: user})
})

app.get("/contactDriver", (req, res) => {
  var drivers = seedData.Drivers
  var randDriver = drivers[Math.floor(Math.random() * drivers.length)]
  // var rando = Math.floor(Math.random() * drivers.length)
  res.render("driver", {randDriver: randDriver})
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




app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
