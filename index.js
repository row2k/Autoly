var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")

app.use(express.static("public"))

app.get("/", (req, res) => {
  var user = seedData.Users[0]
  console.log(user.vehicle)
  res.render("index", {user: user})
})

app.get("/contactDriver", (req, res) => {
  var drivers = seedData.Drivers
  var randDriver = drivers[Math.floor(Math.random() * drivers.length)]
  console.log(randDriver.img_url)
  // var rando = Math.floor(Math.random() * drivers.length)
  res.render("driver", {randDriver: randDriver})
})

app.get("/scheduling", (req, res) => {
  var drivers = seedData.Drivers
  var randDriver = drivers[Math.floor(Math.random() * drivers.length)]
  console.log(randDriver.img_url)
  // var rando = Math.floor(Math.random() * drivers.length)
  res.render("driver", {randDriver: randDriver})
})

//Displays user profiles and their cars
app.get("/:id", (req, res) => {
  var customers = seedData.Users
  for (i = 0; i<customers.length; i++){
    if (req.params.id == customers[i].id){
      var name = customers[i].firstName
    }
    for (p = 0; p <customers[i].vehicle.length; p++){
      var carMake = customers[i].vehicle[p].make
      var carModel = customers[i].vehicle[p].model
      var carColor = customers[i].vehicle[p].color
      var carPlate = customers[i].vehicle[p].plateID
      var carState = customers[i].vehicle[p].plateState
    }
  }
  res.render("user", {name: name, carMake:carMake, carModel:carModel,
    carColor:carColor, carPlate:carPlate, carState})
  })


app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
