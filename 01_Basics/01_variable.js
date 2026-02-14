const accountId = 144553
//accountId = 2 // not allowed
let accountEmail = "arunisharma2006@gmailcom"
var accountPassword = "12345"
accountCity ="Kolkata"
let accountState;
accountEmail = "aruni2902@ac.com"
accountPassword = "54321"
 //prefer not to use var because of issue in block scope and functional scope 
accountCity = "Patna"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])