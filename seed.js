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
}
class Driver{
  constructor(firstName, lastName, profile_pic, id){
    this.firstName = firstName,
    this.lastName = lastName
    this.profile_pic = profile_pic
    this.id = id

  }
}



var seed = function(){
  const Kevin = new User("Kevin", "Mahoney", "229 G Street SW", "228 North Arlington", 1234567890, 1)
  const Khoi = new User("Khoi", "Le", "123 H Street NW", "229 North Arlington", 1234567891, 2)
  Users.push(Kevin, Khoi)

  const Jay = new Driver("Jay", "Corleone", "https://v.cdn.vine.co/r/avatars/A9A28624571289204044023345152_4d7d328af95.5.0.jpg?versionId=SR7_.t9s6hbVupWkYtWeAssU84xErvhl", 1 )
  const Thomas = new Driver ("Thomas", "Smith", "http://beijingcream.com/wp-content/uploads/2013/06/Edward-Snowden-zoomed-in.jpg", 2)
  Drivers.push(Jay, Thomas)

}
seed()
module.exports = {
Users: Users,
Drivers: Drivers
}
