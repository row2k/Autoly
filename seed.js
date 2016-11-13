var Users = []
var Drivers = []

class User{
  constructor(firstName, lastName, homeAddress, workAddress, phone, id){
    this.firstName = firstName,
    this.lastName = lastName,
    this.homeAddress = homeAddress,
    this.workAddress = workAddress,
    this.phone = phone,
    this.id = id,
    this.vehicle = []
  }
  newCar(car){
    this.vehicle.push(car)
  }

  // newCar(make, model, color, plateID, plateState){
  //   var car2 = new Vehicle(make, model, color, plateID, plateState)
  //   this.vehicle.push(car2)


}
class Driver{
  constructor(firstName, lastName, img_url, id){
    this.firstName = firstName,
    this.lastName = lastName,
    this.img_url = img_url,
    this.id = id

  }
}

class Vehicle{
  constructor(make, model, color, plateID, plateState, imgUrl){
    this.make = make,
    this.model = model,
    this.color = color,
    this.plateID = plateID,
    this.plateState = plateState,
    this.imgUrl = imgUrl
  }
}


var seed = function(){
  const Kevin = new User("Kevin", "Mahoney", "229 G Street SW", "228 North Arlington", 1234567890, 1)
  const Khoi = new User("Khoi", "Le", "123 H Street NW", "229 North Arlington", 1234567891, 2)

  const Accord = new Vehicle("Honda", "Accord", "Red","JXH-7345", "VA", "http://www.egmcartech.com/wp-content/uploads/2012/09/2013hondaaccord-04.jpg")
  const Altima = new Vehicle("Nissan", "Altima", "White","VRG-6789", "DC", "http://www.nissanusa.com/dam/nissan/vehicles/cars/altima/2017/overview/accessories/2016-nissan-altima-rear-decklid-spoiler-large.jpg")

  Kevin.newCar(Accord)
  Kevin.newCar(Altima)
  Users.push(Kevin, Khoi)

  const Jay = new Driver("Jay", "Corleone", "https://v.cdn.vine.co/r/avatars/A9A28624571289204044023345152_4d7d328af95.5.0.jpg?versionId=SR7_.t9s6hbVupWkYtWeAssU84xErvhl", 1 )
  const Thomas = new Driver ("Thomas", "Smith", "https://lh4.googleusercontent.com/-iMBIAcdmRPs/UcseOYiTWtI/AAAAAAAAAGo/5Aq8-QwldHo/w1024-h614/good-bye-love.jpg", 2)
  Drivers.push(Jay, Thomas)

}


seed()
module.exports = {
Users: Users,
Drivers: Drivers
}
