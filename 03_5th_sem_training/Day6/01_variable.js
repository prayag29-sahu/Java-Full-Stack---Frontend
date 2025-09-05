const accountId = 144553
let accountEmail = "Prayag@google.com"
var accountPassword = "12345"
accountCity = "Jabalpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hjsbdjw@efe.com"
accountPassword = "21212121"
accountCity = "MP"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])