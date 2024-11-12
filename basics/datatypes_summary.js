// how to store data in memo and access it on that basis datatypes are 2
// Primitive & non primitive 

/*primitive(call by value) means all changes aur operation done on copy
of it not in memo*/
//String,Number,Boolean,null,undefined,symbol(unique)BigInt
//dynamically type:variable types determined at runtime,not compile time 
const score=100
const scoreValue=100.3// no decimal type 
const isLoggedIn=false
const temp=null
let userEmail;//undefined

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);// because symbol make it unique

const bigNumber=34567834547338n //convert into bigInt


/*non primitive(reference type)ye value woh hai jinka  reference memo mai directly allocate hota hai */
//Array, Obejects,Function 
const heros=["shaktiman","naagraj","doga"]
//object
{
    name:"jyoti"
    age: 18
}
let obj={
    name:"raj",
    age:22,
}

//function
const myFunction=function(){
    console.log("hello world");  
} 
console.log(typeof bigNumber);

/* type of val
 undefined=>"undefined"
 null=>"object"
 boolean=>"boolean"
 number=>"number"
 string=>"string"
 array,object:object
 function=>function/object
 null=>object
*/

