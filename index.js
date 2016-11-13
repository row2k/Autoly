var express = require("express")
var app = express();
var hbs = require("hbs")
var seedData = require("./seed.js")

app.use(express.static("public"))

//CONFIRMATION PAGE: PAGE 2
app.get("/confirmation", (req, res) => {
  var priceEstimate = Math.floor((Math.random() * (30 + 17)) + 17);
  var user = seedData.Users[0]
  var homeAddress = user.homeAddress
  var workAddress = user.workAddress
  res.render("confirmation", {user: user, priceEstimate:priceEstimate, homeAddress:homeAddress,
    workAddress:workAddress})
})

//CHECKOUT: PAGE 3-Reaffirm transaction
app.get("/checkout", (req, res) => {

  res.render("checkout")
})

//STATUS PAGE: PAGE 4-contains driver info
app.get("/status", (req, res) => {
  var drivers = seedData.Drivers
  var randDriver = drivers[Math.floor(Math.random() * drivers.length)]
  res.render("status", {randDriver: randDriver})
})


//HOME PAGE: PAGE 1-display car and user profile
app.get("/:id", (req, res) => {
  //cycle through customers to find id match
  var customers = seedData.Users
  for (i = 0; i<customers.length; i++){
    if (req.params.id == customers[i].id){
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
//______________________________

app.set("view engine", "hbs")
app.listen("3001", () => {
  console.log("express is working")
})
