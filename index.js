var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")

app.use(express.static("public"))

app.get("/confirmation", (req, res) => {
  var user = seedData.Users[0]
  console.log(user.vehicle)
  res.render("confirmation", {user: user})
})

app.get("/status", (req, res) => {
  var drivers = seedData.Drivers
  var randDriver = drivers[Math.floor(Math.random() * drivers.length)]
  console.log(randDriver.img_url)
  // var rando = Math.floor(Math.random() * drivers.length)
  res.render("status", {randDriver: randDriver})
})

app.get("/checkout", (req, res) => {

  res.render("checkout")
})

//HOME PAGE Displays car and user profile
app.get("/:id", (req, res) => {
  //cycle through customers to find id match
  var customers = seedData.Users
  for (i = 0; i<customers.length; i++){
    if (req.params.id == customers[i].id){
      console.log(customers[i])
      var name = customers[i].firstName
    }

//cycle through cars of that user
    for (p = 0; p < customers[i].vehicle.length; p++){
      var carMake = customers[i].vehicle[p].make
      var carModel = customers[i].vehicle[p].model
      var carColor = customers[i].vehicle[p].color
      var carPlate = customers[i].vehicle[p].plateID
      var carState = customers[i].vehicle[p].plateState
      var carPhoto = customers[i].vehicle[p].imgUrl
    }
  }
  res.render("home", {name: name, carMake:carMake, carModel:carModel,
    carColor:carColor, carPlate:carPlate, carState:carState, carPhoto:carPhoto})
  })


app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
