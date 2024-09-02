const accountId = 12345
let accountEmail = "Adi.singh3223@gmail.com"
var accountPass = "1233"
accountCity = "Jaipur"
let accountState

// accountId = 2
accountEmail = "itsmeaditya3254@gmail.com"
accountPass = "21222"
accountCity = "Bengaluru"
/*
prefer not to use var because of the issue in block scope and functional scope
*/

console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)
console.table([accountEmail,accountId,accountPass,accountCity,accountState])