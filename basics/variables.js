const accountId=144553 //constant
let accountEmail="jyoti@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"//variable but not use of let and var also consider it as variable 
let accountState;
//variable are store in two ways :let aur var ;


// accountId=2 //not allowed bc const can never be change

accountEmail="hc@gmail"
accountPassword="23456"
accountCity="Delhi"
console.log(accountId);

/*prefer not to use var ...bc of issue in blockscope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity ,accountState])
