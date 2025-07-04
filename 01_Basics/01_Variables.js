const accountId = 142820;
let accountEmail = "mohit@gmail.com";
var accountPassword = "123485";
accountCity = "Jaipur";
let accountState;

//accountId = 2 // not allowed bcz variable with const keyword cannot be assigned a new value.

/*Prefer not to use var 
bcz of issue in block scope and functional scope
*/

accountEmail = "mohitpatil@mp.com";
accountPassword = "9204042304";
accountCity = "Navapur";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);