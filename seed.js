

var Users = ["Kevin"]

class User{
  constructor(firstName, lastName, homeAddress, workAddress, phone, id){
    this.firstName = firstName,
    this.lastName = lastName,
    this.homeAddress = homeAddress,
    this.workAddress = workAddress,
    this.phone = phone,
    this.id = id
  }
}


const Kevin = new User("Kevin", "Mahoney", "229 G Street SW", "228 North Arlington", 1234567890, 1)

// var seed = function(){
//   console.log(Users)
// }
module.exports = {
Users: Users
}
