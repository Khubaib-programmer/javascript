const accountId = 144553 
let accountEmail ="khubaib@gmail.com"
var accountPassword = "12345"
accountCity = "Gonda"
let accountState; // undefined



// accountId = 2 // not allowed because accountId is a constant
accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Lucknow"

console.log(accountId);
/*
pefer not to use var because of its function scope and hoisting issues. let and const are block scoped and do not have hoisting issues. const is used for values that should not be reassigned, while let is used for values that can be reassigned.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


