var Users = []

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



var seed = function(){
  const Kevin = new User("Kevin", "Mahoney", "229 G Street SW", "228 North Arlington", 1234567890, 1)
  const Khoi = new User("Khoi", "Le", "123 H Street NW", "229 North Arlington", 1234567891, 2)
  Users.push(Kevin, Khoi)
}
seed()
module.exports = {
Users: Users
}
